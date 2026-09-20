import { getCollection, type CollectionEntry } from "astro:content";

export type StoryPlate = CollectionEntry<"storyboard">;

export type PlateStatus = StoryPlate["data"]["status"];

export const ACTS = [
  {
    id: "I" as const,
    title: "The Keep — purpose unknown",
    lede: "He tries the leftover answers — phone, badges, lever, WAKE PAIR — and finds them empty.",
  },
  {
    id: "II" as const,
    title: "Nature school",
    lede: "Threshold to path. Weather teaches. Petrel and nest almost feel like a job. At the fox, purpose still empty.",
  },
  {
    id: "III" as const,
    title: "Help / Horizon",
    lede: "Tide channel and help are Waiting. Shared lee is picture proof. Then absence, keep behind, horizon as purpose through helping.",
  },
];

const STATUS_LABEL: Record<PlateStatus, string> = {
  finished: "Finished",
  parked: "Parked",
  waiting: "Waiting",
  cut: "Cut",
};

export function statusLabel(status: PlateStatus): string {
  return STATUS_LABEL[status];
}

export function padPlate(n: number): string {
  return String(n).padStart(2, "0");
}

export function isCutPlate(plate: StoryPlate): boolean {
  return plate.data.status === "cut";
}

export async function getStoryPlates(): Promise<StoryPlate[]> {
  const plates = await getCollection("storyboard");
  return plates.sort((a, b) => a.data.n - b.data.n);
}

export function getActivePlates(plates: StoryPlate[]): StoryPlate[] {
  return plates.filter((plate) => !isCutPlate(plate));
}

export function getCutPlates(plates: StoryPlate[]): StoryPlate[] {
  return plates.filter(isCutPlate);
}

export function groupPlatesByAct(plates: StoryPlate[]) {
  return ACTS.map((act) => ({
    ...act,
    plates: plates.filter((plate) => plate.data.act === act.id),
  }));
}

export function countByStatus(plates: StoryPlate[]) {
  const counts = { finished: 0, parked: 0, waiting: 0, cut: 0 };
  for (const plate of plates) {
    counts[plate.data.status] += 1;
  }
  return counts;
}

export function emptyFrameLabel(status: PlateStatus): string {
  switch (status) {
    case "finished":
      return "Finished in the cut";
    case "parked":
      return "Frame, not finished motion";
    case "cut":
      return "Cut from picture";
    default:
      return "Coming as we shoot";
  }
}
