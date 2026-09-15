import { getCollection, type CollectionEntry } from "astro:content";

export type StoryPlate = CollectionEntry<"storyboard">;

export type PlateStatus = StoryPlate["data"]["status"];

export type StatusTone = "finished" | "parked" | "waiting";

export const ACTS = [
  { id: "I" as const, title: "The Keep" },
  { id: "II" as const, title: "The Living World" },
  { id: "III" as const, title: "Fellowship / Horizon" },
];

/** Plain-English chip, with the board code kept for the legend. */
export function statusChip(status: PlateStatus): {
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

export function padPlate(n: number): string {
  return String(n).padStart(2, "0");
}

export async function getStoryPlates(): Promise<StoryPlate[]> {
  const plates = await getCollection("storyboard");
  return plates.sort((a, b) => a.data.n - b.data.n);
}

export function groupPlatesByAct(plates: StoryPlate[]) {
  return ACTS.map((act) => ({
    ...act,
    plates: plates.filter((plate) => plate.data.act === act.id),
  }));
}

export function countByTone(plates: StoryPlate[]) {
  const counts = { finished: 0, parked: 0, waiting: 0 };
  for (const plate of plates) {
    counts[statusChip(plate.data.status).tone] += 1;
  }
  return counts;
}
