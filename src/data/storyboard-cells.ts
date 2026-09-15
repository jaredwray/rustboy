/**
 * Sequential storyboard cells for /storyboard.
 *
 * stillUrl / clipUrl are live media.rustboy.ai keys only (Chronicle wire,
 * 2026-09-15). Do not invent URLs. Do not use /workspace paths.
 */

export type StoryboardStatus = "finished" | "parked" | "waiting";

export interface StoryboardCell {
  n: number;
  title: string;
  blurb: string;
  status: StoryboardStatus;
  stillUrl?: string;
  clipUrl?: string;
}

export const STORYBOARD_STATUS_LABEL: Record<StoryboardStatus, string> = {
  finished: "Finished",
  parked: "Parked",
  waiting: "Waiting",
};

/** Gloss once on the public page. */
export const STORYBOARD_STATUS_GLOSS =
  "Finished = locked in the cut. Parked = we have a frame, not finished motion. Waiting = empty slot until we shoot.";

export const STORYBOARD_EMPTY_SLOT = "Coming as we shoot";

export const STORYBOARD_CONTINUITY =
  "Plate wound after the theft = metal/copper tear only (no blood). Fox stump = left hind only.";

/** Optional page chrome — FACE_SAFE screening spine + Act I reel. */
export const STORYBOARD_CHROME = {
  progressCut: {
    clipUrl:
      "https://media.rustboy.ai/clips/ship/RUSTBOY_PROGRESS_CUT_FACE_SAFE_2026-09-10.mp4",
    stillUrl:
      "https://media.rustboy.ai/stills/ship/RUSTBOY_PROGRESS_CUT_FACE_SAFE_2026-09-10_contact.jpg",
  },
  actIReel: {
    clipUrl: "https://media.rustboy.ai/clips/RUSTBOY_ACT1_MIX_v1.v1.mp4",
  },
} as const;

const GOLD_SEAM_STILL =
  "https://media.rustboy.ai/stills/ship/kf12c-gold.b.png";

export const STORYBOARD_CELLS: StoryboardCell[] = [
  {
    n: 1,
    title: "Keep in weather",
    blurb:
      "Storm night on the coastal data-keep. Lightning hits the building first. Title.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf01-keep.b.png",
  },
  {
    n: 2,
    title: "Awakening",
    blurb:
      "On the table, a green laser finds him after the building strike. Optic wakes. One face: spherical rust head, warm green eye left, empty socket right, crooked copper plate.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/kf02-table.png",
    clipUrl: "https://media.rustboy.ai/clips/kf02-awaken.CANON.mp4",
  },
  {
    n: 3,
    title: "Born beside absence",
    blurb:
      "Dust outline of an unfinished twin on the long table. He reaches. Nothing fills it.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf04-outline.b.png",
  },
  {
    n: 4,
    title: "The dead phone",
    blurb:
      "Cracked phone ghosts August 2026 and WAKE PAIR — BAY 3. He sets it down carefully.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf05e-phone.b.png",
    clipUrl: "https://media.rustboy.ai/clips/kf05e-phone.mp4",
  },
  {
    n: 5,
    title: "Rain on server glass",
    blurb:
      "Palm on storm glass. Tower in the rain. One green point against the keep.",
    status: "finished",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf06f-glass.mp4",
  },
  {
    n: 6,
    title: "The unpulled lever",
    blurb: "Red caged lever. He studies it. Leaves it.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf07c-lever.b.png",
  },
  {
    n: 7,
    title: "Faces that are not his",
    blurb: "Curling ID badges. None of them are him.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf08d-badges.b.png",
  },
  {
    n: 8,
    title: "Well of light",
    blurb: "Spiral stair. Storm light above. He starts climbing.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf09d-well.b.png",
  },
  {
    n: 9,
    title: "The sag",
    blurb:
      "Midway, power dips. He sits with the rain leak. Stands because he can.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf10e-sag.b.png",
  },
  {
    n: 10,
    title: "Threshold",
    blurb:
      "Roof door. He steps through rear-on — face never turns to camera here.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/kf11j-threshold.png",
    clipUrl: "https://media.rustboy.ai/clips/kf11j-threshold.mp4",
  },
  {
    n: 11,
    title: "Gold seam / the door",
    blurb:
      "Breaking storm. Gold light on the water. Distant van that doesn’t become a savior. In the full short he looks down, not into the light as an ending.",
    status: "parked",
    stillUrl: GOLD_SEAM_STILL,
  },
  {
    n: 12,
    title: "Hinge",
    blurb:
      "Same roof frame becomes the door into Act II — over the parapet onto the cliff path.",
    status: "finished",
    stillUrl: GOLD_SEAM_STILL,
  },
  {
    n: 13,
    title: "Down the cliff",
    blurb: "Wet switchbacks. Keep becomes a place behind him.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf13-down.b.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf13b-down.b.mp4",
  },
  {
    n: 14,
    title: "Path that was never printed",
    blurb: "Goat trail. Living color below.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf14d-path.png",
  },
  {
    n: 15,
    title: "Rain school",
    blurb:
      "Rain hits the crooked plate in the open. Weather, not a leak in stone.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf15c-rain.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf15c-rain.mp4",
  },
  {
    n: 16,
    title: "Moss that is not rust",
    blurb: "Soft living green. Finger. Recoil. Same finger back.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf16-moss.b.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf16c-moss.mp4",
  },
  {
    n: 17,
    title: "Tide pool looks back",
    blurb: "A dish of sky. Something looks back. He does not keep the pool.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf17b-pool.b.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf17d-pool.mp4",
  },
  {
    n: 18,
    title: "Wind in grass",
    blurb: "Grass lays and stands. Movement with no motor.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/kf18g-grass.png",
  },
  {
    n: 19,
    title: "The theft",
    blurb:
      "Storm-petrel pecks a copper flake from the mismatched plate and flies.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf19c-petrel.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf19c-petrel.mp4",
  },
  {
    n: 20,
    title: "The return",
    blurb: "Nest ledge. Flake given back. Leftover returned.",
    status: "finished",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf20e-nest.png",
    clipUrl: "https://media.rustboy.ai/clips/ship/kf20e-nest.mp4",
  },
  {
    n: 21,
    title: "Fox at ten yards",
    blurb:
      "Three-legged coastal fox. Recognition across wet rock — not a rescue.",
    status: "parked",
  },
  {
    n: 22,
    title: "Shared lee",
    blurb:
      "Squall. Same basalt lee for fox, robot, petrel above. Nobody saves anybody.",
    status: "parked",
  },
  {
    n: 23,
    title: "Absence rhymes",
    blurb: "Empty socket and missing hind rhyme. Neither fills the other.",
    status: "parked",
    stillUrl: "https://media.rustboy.ai/stills/ship/kf23d-absence.b.png",
  },
  {
    n: 24,
    title: "He does not go back",
    blurb: "Keep small on the headland. He walks away.",
    status: "parked",
  },
  {
    n: 25,
    title: "Horizon",
    blurb:
      "Fox at a chosen distance. Petrel a dark hyphen over the water. Horizon ahead. End card rustboy.ai.",
    status: "parked",
  },
];
