import { getCollection, type CollectionEntry } from "astro:content";

export type StoryBeat = CollectionEntry<"storyboard">;

export type BeatStatus = StoryBeat["data"]["status"];

export type StatusTone = "finished" | "parked" | "waiting";

export const ACTS = [
  { id: "I" as const, title: "The Keep" },
  { id: "II" as const, title: "The Living World" },
  { id: "III" as const, title: "Fellowship / Horizon" },
];

/** Plain-English chip, with the board code kept for the legend. */
export function statusChip(status: BeatStatus): {
  label: string;
  code: string;
  tone: StatusTone;
} {
  switch (status) {
    case "lock":
      return { label: "Finished", code: "LOCK", tone: "finished" };
    case "hold":
      return { label: "Parked", code: "HOLD", tone: "parked" };
    case "pass":
      return { label: "Waiting", code: "PASS", tone: "waiting" };
    case "hinge":
      return { label: "Waiting", code: "HINGE", tone: "waiting" };
  }
}

export function padBeat(beat: number): string {
  return String(beat).padStart(2, "0");
}

export async function getStoryBeats(): Promise<StoryBeat[]> {
  const beats = await getCollection("storyboard");
  return beats.sort((a, b) => a.data.beat - b.data.beat);
}

export function groupBeatsByAct(beats: StoryBeat[]) {
  return ACTS.map((act) => ({
    ...act,
    beats: beats.filter((beat) => beat.data.act === act.id),
  }));
}

export function countByTone(beats: StoryBeat[]) {
  const counts = { finished: 0, parked: 0, waiting: 0 };
  for (const beat of beats) {
    counts[statusChip(beat.data.status).tone] += 1;
  }
  return counts;
}
