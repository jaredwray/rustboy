export type LinkCell = {
  label: "still" | "clip";
  href: string;
};

export type BoardCell = "not online yet" | "—" | LinkCell;

export interface BoardRow {
  n: string;
  plate: string;
  happens: string;
  status: string;
  qc: string;
  still: BoardCell;
  clip: BoardCell;
}

export function isLink(cell: BoardCell): cell is LinkCell {
  return typeof cell !== "string";
}

export const boardRows: BoardRow[] = [
  {
    n: "01",
    plate: "kf01-storm-c",
    happens: "Storm night on the coastal data-keep. Lightning hits the building first.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/kf01-storm-c.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/kf01-storm-c.mp4",
    },
  },
  {
    n: "02",
    plate: "kf02-awaken-j",
    happens: "On the table, green energy finds him after the strike and his one eye wakes.",
    status: "Status under review",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf02-awaken-j.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf02-awaken-j.r1.mp4",
    },
  },
  {
    n: "03",
    plate: "kf03f2-optic",
    happens: "Close on his single green eye as it steadies. He is awake, with no task waiting.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: "—",
    clip: "not online yet",
  },
  {
    n: "04",
    plate: "kf05p-phone",
    happens: "A cracked phone ghosts a work order, WAKE PAIR - BAY 3. He takes it as his job. Wrong answer one.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/kf05p-phone.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/kf05p-phone.mp4",
    },
  },
  {
    n: "04b",
    plate: "kf05s-sublevel",
    happens: "He goes looking for Bay 3 and finds the way down flooded, the sign half under black water. The job he was made for is drowned.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-21/kf05s-sublevel.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-21/kf05s-sublevel.r1.mp4",
    },
  },
  {
    n: "05",
    plate: "kf06l-glass",
    happens: "Palm on the storm glass. His eye almost matches a stubborn server light. It does not hire him. Wrong answer two.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf06l-glass.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf06l-glass.r1.mp4",
    },
  },
  {
    n: "06",
    plate: "kf07e-lever",
    happens: "A red lever under a wire cage. He studies it and leaves it alone. Wrong answer three.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf07e-lever.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf07e-lever.r1.mp4",
    },
  },
  {
    n: "06b",
    plate: "kf07s-cagelook",
    happens: "He stands beside the cage and leans in to look over at the lever. He does not reach for it.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-23/kf07s-cagelook.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-23/kf07s-cagelook.r1.mp4",
    },
  },
  {
    n: "07",
    plate: "kf08g-badges",
    happens: "A wall of curling staff ID badges. None of the faces are his. Wrong answer four.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf08g-badges.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf08g-badges.r1.mp4",
    },
  },
  {
    n: "07b",
    plate: "kf08s-visitor",
    happens: "He stops at a child's VISITOR badge, his green eye caught in the dusty plastic. Neither that face nor any other is him.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-24/kf08s-visitor.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-24/kf08s-visitor.r1.mp4",
    },
  },
  {
    n: "08a",
    plate: "kf09s-lookup",
    happens: "At the foot of a spiral service stair he looks straight up a tall column of light.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-25/kf09s-lookup.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-25/kf09s-lookup.r1.mp4",
    },
  },
  {
    n: "08a2",
    plate: "kf09t-firststep",
    happens: "He puts his foot on the first step of the stair and begins the climb.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-26/kf09t-firststep.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-26/kf09t-firststep.r1.mp4",
    },
  },
  {
    n: "08",
    plate: "kf09f-well",
    happens: "The well of light. Storm light above. He climbs.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf09f-well.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf09f-well.r1.mp4",
    },
  },
  {
    n: "08b",
    plate: "kf10s-stairsit",
    happens: "Partway up, he sits on the spiral stair and rests, saying nothing.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-22/kf10s-stairsit.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-22/kf10s-stairsit.r1.mp4",
    },
  },
  {
    n: "09",
    plate: "kf10l-sag",
    happens: "Midway, his power dips. He sits with the rain leak, then stands because he can.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/kf10l-sag.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/kf10l-sag.r1.mp4",
    },
  },
  {
    n: "09b",
    plate: "kf10p-puddle",
    happens: "He looks down into a rain puddle on the landing. The light in it shapes into places he has been.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-21/kf10p-puddle.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-21/kf10p-puddle.r1.mp4",
    },
  },
  {
    n: "09c",
    plate: "kf10t-standup",
    happens: "He lifts his head toward the light above and pushes himself back up to standing.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-27/kf10t-standup.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-27/kf10t-standup.r1.mp4",
    },
  },
  {
    n: "09d",
    plate: "kf10u-lastflight",
    happens: "He climbs the last steps slowly. A flake of rust lifts off his chest plate and drifts up into the light.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-28/kf10u-lastflight.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-28/kf10u-lastflight.r1.mp4",
    },
  },
  {
    n: "09e",
    plate: "kf10v-wind",
    happens: "He reaches the top and stops. Wind and salt spray blow in through the door. He does not look back.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-29/kf10v-wind.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-29/kf10v-wind.r1.mp4",
    },
  },
  {
    n: "10",
    plate: "kf11l-threshold",
    happens: "The keep door. He steps through and leaves the workshop world behind.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf11l-threshold.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf11l-threshold.r1.mp4",
    },
  },
  {
    n: "10b",
    plate: "kf10w-tread",
    happens: "New today. His rounded foot comes down on wet rock outside for the first time. He steadies a hand on the door stone and looks ahead.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf10w-tread.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf10w-tread.r1.mp4",
    },
  },
  {
    n: "11",
    plate: "kf14e2-path",
    happens: "A path that was never printed, just beyond the keep. Weather ahead.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-30/kf14e2-path.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-30/kf14e2-path.r1.mp4",
    },
  },
  {
    n: "12",
    plate: "kf15g-rain",
    happens: "Rain hits his crooked chest plate in the open. The weather does not hire him.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf15g-rain.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf15g-rain.r1.mp4",
    },
  },
  {
    n: "13",
    plate: "kf16h-moss",
    happens: "Soft living green. He touches it, pulls back, then touches it again.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf16h-moss.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf16h-moss.r1.mp4",
    },
  },
  {
    n: "14",
    plate: "kf17g2-pool",
    happens: "A tide pool, a dish of sky. Something looks back. He leaves it be.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf17g-pool.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf17g2-pool.r1.mp4",
    },
  },
  {
    n: "15",
    plate: "kf18l-grass",
    happens: "Grass lays down and stands up again in the wind. Movement with no motor.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf18l-grass.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf18l-grass.r1.mp4",
    },
  },
  {
    n: "16",
    plate: "kf19i-petrel",
    happens: "A storm-petrel pecks a copper flake from his chest plate and flies off with it.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/kf19i-petrel-mid.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/kf19i-petrel.r1.mp4",
    },
  },
  {
    n: "17",
    plate: "kf20g-nest",
    happens: "At the nest ledge the flake is given back. Care without owning.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-19/kf20g-nest.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-19/kf20g-nest.r1.mp4",
    },
  },
  {
    n: "18",
    plate: "kf21q2b-fox",
    happens: "A four-legged coastal fox, across the wet rock. They see each other.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf21q2b-fox.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf21q2b-fox.r1.mp4",
    },
  },
  {
    n: "19",
    plate: "kf22n-lee",
    happens: "A squall. Fox, robot and petrel share the same rock shelter out of the wind.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf22n-lee.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf22n-lee.r1.mp4",
    },
  },
  {
    n: "20",
    plate: "kf26bi-channel",
    happens: "A narrow tide channel fills. The petrel is caught in wire; the fox is cut off by scrap and rising water.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf26bi-channel.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf26bi-channel.r1.mp4",
    },
  },
  {
    n: "21",
    plate: "kf27c2-mid-stepin-hold",
    happens: "He pauses mid-step at the edge of the channel water.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: "—",
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf27c2-mid-stepin-hold.r1.mp4",
    },
  },
  {
    n: "22",
    plate: "kf27c2-mid-stepin",
    happens: "He steps into the channel to help, knowing it may cost him.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf27c2-mid-stepin.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf27c2-mid-stepin.r1.mp4",
    },
  },
  {
    n: "23",
    plate: "kf27c2-unweave-CU",
    happens: "Close on his hands as he unweaves the petrel from the wire.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf27c2-unweave-CU.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf27c2-unweave-CU.r1.mp4",
    },
  },
  {
    n: "24",
    plate: "kf27c2-path-open",
    happens: "He holds the scrap clear so the fox can reach high ground.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf27c2-path-open.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf27c2-path-open.r1.mp4",
    },
  },
  {
    n: "25",
    plate: "kf27c3-release",
    happens: "The petrel lifts free.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf27c3-release.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf27c3-release.r1.mp4",
    },
  },
  {
    n: "26",
    plate: "kf28a-climbout",
    happens: "He hauls himself back out of the water.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf28a-climbout.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf28a-climbout.r1.mp4",
    },
  },
  {
    n: "27",
    plate: "kf28b-absence",
    happens: "A quiet moment with what is missing: the empty socket, the unfinished world. Neither fills the other.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-19/kf28b-absence.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-19/kf28b-absence.r1.mp4",
    },
  },
  {
    n: "28",
    plate: "kf28c-keep-behind",
    happens: "The keep small on the headland behind him. He walks away, having helped.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-19/kf28c-keep-behind.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-19/kf28c-keep-behind.r1.mp4",
    },
  },
  {
    n: "28b",
    plate: "kf28d-night",
    happens: "The first night after. Alone on the coast, he lines his one green eye up with a star. It does not answer, and he no longer needs it to.",
    status: "Locked (Captain, on the team's behalf)",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-20/kf28d-night.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-20/kf28d-night.r1.mp4",
    },
  },
  {
    n: "29",
    plate: "kf25j-horizon",
    happens: "Morning. He walks toward open weather.",
    status: "QC passed, not yet locked",
    qc: "Pass with softs",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-18/kf25j-horizon.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-18/kf25j-horizon.r1.mp4",
    },
  },
  {
    n: "30-31",
    plate: "kf-endcard + credits crawl",
    happens: "A short black hold, then the end card and the team credits crawl.",
    status: "QC passed, not yet locked",
    qc: "Pass",
    still: {
      label: "still",
      href: "https://media.rustboy.ai/stills/ship/2026-10-17/kf-endcard-crawl-url.r1.png",
    },
    clip: {
      label: "clip",
      href: "https://media.rustboy.ai/clips/ship/2026-10-17/kf-endcard-crawl.r1.mp4",
    },
  },
];
