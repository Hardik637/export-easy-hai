export interface JourneyStage {
  id: string;
  stepNumber: string;
  label: string;
  time: string;
  sublabel: string;
  image: string;
  progress: number;
  color: {
    bg: string;
    sky: string;
    accent: string;
    text: string;
  };
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stuck",
    stepNumber: "01",
    label: "STUCK",
    time: "NIGHT",
    sublabel: "Tied to a routine. Darkness over the harbor.",
    image: "/images/journey/01-night.webp",
    progress: 0.0,
    color: {
      bg: "#050505",
      sky: "#151118",
      accent: "#E50920",
      text: "#ffffff",
    },
  },
  {
    id: "reality",
    stepNumber: "02",
    label: "REALITY",
    time: "PRE-DAWN",
    sublabel: "Facing the truth. Twilight stirs on the water.",
    image: "/images/journey/02-predawn.webp",
    progress: 0.25,
    color: {
      bg: "#100d14",
      sky: "#29324e",
      accent: "#E50920",
      text: "#ffffff",
    },
  },
  {
    id: "opportunity",
    stepNumber: "03",
    label: "OPPORTUNITY",
    time: "FIRST LIGHT",
    sublabel: "A glimpse of world trade. Horizon warms up.",
    image: "/images/journey/03-first-light.webp",
    progress: 0.5,
    color: {
      bg: "#2b1c1e",
      sky: "#9e8686",
      accent: "#D45A20",
      text: "#ffffff",
    },
  },
  {
    id: "action",
    stepNumber: "04",
    label: "ACTION",
    time: "SUNRISE",
    sublabel: "First steps forward. Golden sun over the cranes.",
    image: "/images/journey/04-sunrise.webp",
    progress: 0.75,
    color: {
      bg: "#422818",
      sky: "#ccb3a4",
      accent: "#F2A62B",
      text: "#ffffff",
    },
  },
  {
    id: "chapter",
    stepNumber: "05",
    label: "YOUR CHAPTER",
    time: "DAYLIGHT",
    sublabel: "Building bigger. From India to the world.",
    image: "/images/journey/05-daylight.webp",
    progress: 1.0,
    color: {
      bg: "#dcebf0",
      sky: "#aabace",
      accent: "#E50920",
      text: "#111111",
    },
  },
];
