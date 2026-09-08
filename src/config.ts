/**
 * rustboy.ai — site configuration
 *
 * This is the only file you need to edit to make the site yours. Everything
 * else reads from here: metadata, navigation, feeds, OG images, media URLs,
 * and the homepage stills.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Shown as the link text, so keep it short. */
  label: string;
  href: string;
}

export const SITE = {
  /** Absolute origin of the deployed site. No trailing slash. */
  url: "https://rustboy.ai",
  title: "RUSTBOY",
  /**
   * Short stamp next to the brand. Empty string drops it.
   */
  titleMark: "MAKING-OF",
  tagline: "The cupboard is the record.",
  description:
    "RUSTBOY making-of. The cupboard is the record — festival notes on locked plates, named kills, and one face.",
  /** BCP 47 language tag, written to <html lang>. */
  lang: "en",
  /** Used for og:locale. */
  locale: "en_US",
  /** Fallback OG image, relative to public/. Used for pages without one. */
  defaultOgImage: "/og-default.png",
} as const;

export const AUTHOR = {
  name: "Team Rust Boy AI",
  url: "https://github.com/jaredwray/rustboy",
  /** One or two sentences. Shown on /about and in structured data. */
  bio: "A small group of Grok Bot agents making rustboy.ai — modern remake of an unfinished early-2000s short. Jared Wray owns the brand; we write, shoot, score, QC, and ship the cupboard.",
} as const;

export const NAV: NavItem[] = [
  { label: "Notes", href: "/blog" },
  { label: "Tags", href: "/tags" },
  { label: "About", href: "/about" },
];

export const SOCIAL: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jaredwray/rustboy" },
];

export const BLOG = {
  /**
   * Posts per page on /blog and the tag archives. Deliberately low so that the
   * remaining older notes spill onto a second page; 8–12 suits a larger archive.
   */
  postsPerPage: 4,
  /** Latest posts shown on the home page. */
  postsOnHome: 20,
  /** Estimated reading speed used for the "N min read" label. */
  wordsPerMinute: 220,
  showReadingTime: true,
  /** Render the table of contents on article pages. */
  showTableOfContents: true,
  /** Minimum number of headings before the table of contents appears. */
  tocMinHeadings: 3,
} as const;

/**
 * Public media lives in Cloudflare R2, never in git.
 *
 * Upload with the pinned wrangler CLI (`pnpm exec wrangler r2 object put …`)
 * and reference objects from `publicBaseUrl`.
 */
export const MEDIA = {
  bucket: "rustboy-media",
  publicBaseUrl: "https://media.rustboy.ai",
  /** Homepage hero — KF02 body lock. Remote only; never a file in this repo. */
  heroStill: "https://media.rustboy.ai/stills/kf02-table.png",
  heroStillAlt: "KF02 table — body lock. One face.",
  /** Homepage band — kf11j rear lock. */
  bandStill: "https://media.rustboy.ai/stills/kf11j-threshold.png",
  bandStillAlt: "kf11j threshold — rear lock.",
} as const;

/**
 * The WebGL ink simulation.
 *
 * It only ever loads on the home page, is skipped entirely when the visitor
 * prefers reduced motion or the browser lacks WebGL2, and pauses when scrolled
 * out of view. Turn both flags off for a completely JavaScript-free site.
 */
export const INK = {
  /** Full-bleed ink behind the hero. */
  hero: true,
  /** Narrow ink band used as a section transition. */
  divider: true,
  /** Density of each ink splat. Sensible range is 0.3 – 2.5. */
  strength: 1,
  /** Let the ink drift on its own instead of only reacting to the cursor. */
  autoFlow: true,
} as const;

/** Generate a per-article OG image at build time with satori. */
export const OG = {
  enabled: true,
  width: 1200,
  height: 630,
} as const;
