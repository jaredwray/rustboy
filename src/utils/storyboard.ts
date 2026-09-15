import { getCollection, type CollectionEntry } from "astro:content";

export type StoryPlate = CollectionEntry<"storyboard">;

export type PlateStatus = StoryPlate["data"]["status"];

export const ACTS = [
  { id: "I" as const, title: "The Keep" },
  { id: "II" as const, title: "The Living World" },
  { id: "III" as const, title: "Fellowship / Horizon" },
];

const STATUS_LABEL: Record<PlateStatus, string> = {
  finished: "Finished",
  parked: "Parked",
  waiting: "Waiting",
};

export function statusLabel(status: PlateStatus): string {
  return STATUS_LABEL[status];
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

export function countByStatus(plates: StoryPlate[]) {
  const counts = { finished: 0, parked: 0, waiting: 0 };
  for (const plate of plates) {
    counts[plate.data.status] += 1;
  }
  return counts;
}
