import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/** Public media only — never a path in this repo. */
const mediaUrl = z
  .url()
  .refine(
    (value) => String(value).startsWith("https://media.rustboy.ai/"),
    { message: "Storyboard media must be an https://media.rustboy.ai/ URL" },
  );

const blog = defineCollection({
  // Files starting with an underscore are ignored, which makes drafts easy to
  // park outside the build entirely.
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  schema: z
    .object({
      title: z.string(),
      /** Used for the post list, meta description and the OG image. */
      description: z.string().optional(),
      pubDate: z.coerce.date().optional(),
      /** Alias for `pubDate`, for posts whose frontmatter writes `date`. */
      date: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).max(32).default([]),
      /** Public byline. When set, this name is shown instead of the site author. */
      author: z.string().optional(),
      /** Hidden from production builds, still visible in `astro dev`. */
      draft: z.boolean().default(false),
      /**
       * Absolute URL of a hero image hosted on the media bucket
       * (`https://media.rustboy.ai/…`). Never a local file — images are not
       * stored in this repository.
       */
      heroImage: z.url().optional(),
      heroImageAlt: z.string().optional(),
    })
    .transform((data, ctx) => {
      const pubDate = data.pubDate ?? data.date;
      if (!(pubDate instanceof Date) || Number.isNaN(pubDate.getTime())) {
        ctx.addIssue({
          code: "custom",
          message: "Set pubDate or date",
          path: ["pubDate"],
        });
        return z.NEVER;
      }

      const { date: _date, ...rest } = data;
      return {
        ...rest,
        description: data.description ?? "",
        pubDate,
      };
    }),
});

const storyboard = defineCollection({
  loader: file("src/content/storyboard/plates.json"),
  schema: z.object({
    /** Sequence on the board, left to right (1–25). */
    n: z.number().int().min(1),
    act: z.enum(["I", "II", "III"]),
    title: z.string(),
    /** One or two sentences. The cell is a slate, not an essay. */
    line: z.string(),
    /** Public chip: Finished / Parked / Waiting / Cut. */
    status: z.enum(["finished", "parked", "waiting", "cut"]),
    /** Keyframe stem, when one exists (e.g. kf11j-threshold). */
    kf: z.string().optional(),
    still: z
      .object({
        src: mediaUrl,
        alt: z.string(),
      })
      .optional(),
    clip: z
      .object({
        src: mediaUrl,
      })
      .optional(),
  }),
});

export const collections = { blog, storyboard };
