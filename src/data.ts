import { Skin, LevelConfig, FoodType } from './types';

export const SNAKE_SKINS: Skin[] = [
  {
    id: 'slinky',
    name: 'Slinky Green 🐍',
    primaryColor: '#4ADE80', // vibrant green
    secondaryColor: '#22C55E', // dark green
    eyeColor: '#FFFFFF',
    accessory: 'NONE',
    pattern: 'SOLID',
    description: 'The friendly, happy default snake. Loves red juicy apples!'
  },
  {
    id: 'glam',
    name: 'Princess Peach 👑',
    primaryColor: '#F472B6', // bright pink
    secondaryColor: '#DB2777', // hot pink
    eyeColor: '#FFFFFF',
    accessory: 'CROWN',
    pattern: 'SPOTS',
    description: 'A fabulous pink snake with a shiny gold crown. Absolutely royalty!'
  },
  {
    id: 'zippy',
    name: 'Cool Breeze 😎',
    primaryColor: '#38BDF8', // light blue
    secondaryColor: '#0284C7', // darker blue
    eyeColor: '#FACC15', // yellow eyes
    accessory: 'SUNGLASSES',
    pattern: 'STRIPES',
    description: 'Rocking cool black sunglasses. Cool, calm, and incredibly fast!'
  },
  {
    id: 'ninja',
    name: 'Shadow Ninja 🥷',
    primaryColor: '#475569', // slate gray
    secondaryColor: '#1E293B', // deep dark slate
    eyeColor: '#EF4444', // glowing red eyes
    accessory: 'BANDANA',
    pattern: 'SOLID',
    description: 'A master of stealth wearing a vibrant red ninja head bandana.'
  },
  {
    id: 'mustache',
    name: 'Sir Reginald 🧔',
    primaryColor: '#F97316', // orange
    secondaryColor: '#C2410C', // deep orange
    eyeColor: '#FFFFFF',
    accessory: 'MUSTACHE',
    pattern: 'STRIPES',
    description: 'A distinguished gentleman snake with an elegant vintage mustache.'
  },
  {
    id: 'cosmic',
    name: 'Cosmic Star 🌟',
    primaryColor: '#A855F7', // purple
    secondaryColor: '#3B82F6', // blue
    eyeColor: '#FFFFFF',
    accessory: 'NONE',
    pattern: 'GLOW',
    description: 'An cosmic glow snake that shifts colors between nebula purple and space blue.'
  },
  {
    id: 'dragon',
    name: 'Golden Dragon 🐉',
    primaryColor: '#F59E0B', // amber gold
    secondaryColor: '#EF4444', // fiery red
    eyeColor: '#EF4444',
    accessory: 'CROWN',
    pattern: 'GLOW',
    description: 'A legendary dragon serpent coated in solid gold. Breath of stars!'
  },
  {
    id: 'poison',
    name: 'Neon Poison 🧪',
    primaryColor: '#10B981', // vibrant emerald
    secondaryColor: '#8B5CF6', // purple toxic
    eyeColor: '#FACC15',
    accessory: 'NONE',
    pattern: 'SPOTS',
    description: 'Bioluminescent green and venom purple. Exquisite but highly lethal!'
  },
  {
    id: 'retro',
    name: 'Retro Player 🎮',
    primaryColor: '#059669', // classic retro green
    secondaryColor: '#1E293B', // dark shadow block
    eyeColor: '#FFFFFF',
    accessory: 'SUNGLASSES',
    pattern: 'STRIPES',
    description: 'Direct from the nostalgic green screen of the retro brick phone.'
  },
  {
    id: 'ruby',
    name: 'Ruby Crimson 🧣',
    primaryColor: '#DC2626', // ruby red
    secondaryColor: '#F43F5E', // soft rose
    eyeColor: '#FFFFFF',
    accessory: 'BANDANA',
    pattern: 'GLOW',
    description: 'Wearing a warrior bandana and glistening with diamond-hard ruby scales.'
  },
  {
    id: 'candy',
    name: 'Candy Gent 🍬',
    primaryColor: '#EC4899', // bubblegum pink
    secondaryColor: '#FFFFFF', // pure white stripe
    eyeColor: '#FFFFFF',
    accessory: 'MUSTACHE',
    pattern: 'STRIPES',
    description: 'Dapper peppermint candy cane design with a distinguished mustache!'
  },
  {
    id: 'phantom',
    name: 'Midnight Ghost 🕶️',
    primaryColor: '#1E1B4B', // midnight indigo
    secondaryColor: '#6366F1', // indigo accent
    eyeColor: '#60A5FA',
    accessory: 'SUNGLASSES',
    pattern: 'GLOW',
    description: 'A cool specter of the night who plays best when shifting dimensions.'
  },
  {
    id: 'angry_viper',
    name: 'Angry Viper 😡',
    primaryColor: '#DC2626', // fiery red
    secondaryColor: '#7F1D1D', // blood red
    eyeColor: '#FBBF24', // golden yellow angry eyes
    accessory: 'BANDANA',
    pattern: 'STRIPES',
    description: 'Extremely short-tempered! Don\'t mess with him, he strikes with fury!'
  },
  {
    id: 'goofy_charlie',
    name: 'Goofy Charlie 🤪',
    primaryColor: '#FBBF24', // golden yellow
    secondaryColor: '#D97706', // dark amber
    eyeColor: '#FFFFFF',
    accessory: 'MUSTACHE',
    pattern: 'SPOTS',
    description: 'Always playing pranks and making silly faces. Totally sweet and funny!'
  },
  {
    id: 'toxic_shroom',
    name: 'Mad Scientist 🧪',
    primaryColor: '#A855F7', // bright violet
    secondaryColor: '#10B981', // toxic green spots
    eyeColor: '#F43F5E', // pink glowing eyes
    accessory: 'SUNGLASSES',
    pattern: 'SPOTS',
    description: 'Mixing weird potions inside the radioactive garden. Do not eat his experimental apples!'
  },
  {
    id: 'royal_sir',
    name: 'Sir Emperor 🎩',
    primaryColor: '#1E3A8A', // deep blue
    secondaryColor: '#FACC15', // gold trim
    eyeColor: '#FFFFFF',
    accessory: 'CROWN',
    pattern: 'STRIPES',
    description: 'Highly sophisticated blue bloodline with an outstanding sense of authority.'
  },
  {
    id: 'fire',
    name: 'Ghostfire Rider 🔥',
    primaryColor: '#F97316', // bright orange
    secondaryColor: '#EF4444', // fiery red
    eyeColor: '#FBBF24', // golden eyes
    accessory: 'BANDANA',
    pattern: 'GLOW',
    description: 'Ghost Rider inspired blaze! Trails of glowing ashes, fireballs and lava-glowing scales!'
  },
  {
    id: 'ice',
    name: 'Glacier Frostbite ❄️',
    primaryColor: '#38BDF8', // ice blue
    secondaryColor: '#0284C7', // ocean frost
    eyeColor: '#E0F2FE', // bright white-blue eyes
    accessory: 'CROWN',
    pattern: 'GLOW',
    description: 'Frozen ice shell with frosty mist, diamond crystals and beautiful snow sparkles!'
  }
];

export const LEVEL_CONFIGS: LevelConfig[] = [
  {
    level: 1,
    targetScore: 100,
    speed: 350,
    obstacles: [],
    theme: {
      bg: 'from-green-50 to-emerald-100',
      grid: '#E2E8F0',
      border: 'border-emerald-400',
      name: 'Sunny Grassland 🏡',
      bgCol1: '#C2F5D3',
      bgCol2: '#E6FCEE'
    }
  },
  {
    level: 2,
    targetScore: 120,
    speed: 330,
    obstacles: [
      { x: 5, y: 5 }, { x: 5, y: 6 },
      { x: 14, y: 5 }, { x: 14, y: 6 },
      { x: 5, y: 13 }, { x: 5, y: 14 },
      { x: 14, y: 13 }, { x: 14, y: 14 }
    ],
    theme: {
      bg: 'from-amber-50 to-orange-100',
      grid: '#FED7AA',
      border: 'border-orange-400',
      name: 'Candy Forest 🍬',
      bgCol1: '#FED7AA',
      bgCol2: '#FFF7ED'
    }
  },
  {
    level: 3,
    targetScore: 150,
    speed: 310,
    obstacles: [
      { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 3 }, { x: 5, y: 3 },
      { x: 16, y: 3 }, { x: 16, y: 4 }, { x: 16, y: 5 }, { x: 15, y: 3 }, { x: 14, y: 3 },
      { x: 3, y: 16 }, { x: 3, y: 15 }, { x: 3, y: 14 }, { x: 4, y: 16 }, { x: 5, y: 16 },
      { x: 16, y: 16 }, { x: 16, y: 15 }, { x: 16, y: 14 }, { x: 15, y: 16 }, { x: 14, y: 16 }
    ],
    theme: {
      bg: 'from-purple-50 to-indigo-100',
      grid: '#E9D5FF',
      border: 'border-indigo-400',
      name: 'Castle Ruins 🏰',
      bgCol1: '#E9D5FF',
      bgCol2: '#FAF5FF'
    }
  },
  {
    level: 4,
    targetScore: 180,
    speed: 295,
    obstacles: [
      { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 5, y: 6 }, { x: 6, y: 6 },
      { x: 13, y: 5 }, { x: 14, y: 5 }, { x: 13, y: 6 }, { x: 14, y: 6 },
      { x: 5, y: 13 }, { x: 6, y: 13 }, { x: 5, y: 14 }, { x: 6, y: 14 },
      { x: 13, y: 13 }, { x: 14, y: 13 }, { x: 13, y: 14 }, { x: 14, y: 14 }
    ],
    theme: {
      bg: 'from-rose-50 to-red-100',
      grid: '#FECDD3',
      border: 'border-rose-400',
      name: 'Spicy Volcano 🌋',
      bgCol1: '#FECDD3',
      bgCol2: '#FFF1F2'
    }
  },
  {
    level: 5,
    targetScore: 200,
    speed: 280,
    obstacles: [
      { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 4, y: 7 }, { x: 4, y: 8 }, { x: 4, y: 11 }, { x: 4, y: 12 }, { x: 4, y: 13 }, { x: 4, y: 14 }, { x: 4, y: 15 },
      { x: 15, y: 4 }, { x: 15, y: 5 }, { x: 15, y: 6 }, { x: 15, y: 7 }, { x: 15, y: 8 }, { x: 15, y: 11 }, { x: 15, y: 12 }, { x: 15, y: 13 }, { x: 15, y: 14 }, { x: 15, y: 15 },
      { x: 8, y: 3 }, { x: 11, y: 3 },
      { x: 8, y: 16 }, { x: 11, y: 16 }
    ],
    theme: {
      bg: 'from-slate-900 to-indigo-950',
      grid: '#1E293B',
      border: 'border-violet-500',
      name: 'Cyber Neon Grid 🌌',
      bgCol1: '#1E1B4B',
      bgCol2: '#0B0A21'
    }
  },
  {
    level: 6,
    targetScore: 220,
    speed: 265,
    obstacles: [
      { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 7, y: 3 }, { x: 12, y: 3 }, { x: 13, y: 3 }, { x: 14, y: 3 },
      { x: 5, y: 16 }, { x: 6, y: 16 }, { x: 7, y: 16 }, { x: 12, y: 16 }, { x: 13, y: 16 }, { x: 14, y: 16 }
    ],
    theme: {
      bg: 'from-yellow-50 to-amber-100',
      grid: '#FEF08A',
      border: 'border-yellow-500',
      name: 'Golden Desert 🏜️',
      bgCol1: '#FEF08A',
      bgCol2: '#FEF9C3'
    }
  },
  {
    level: 7,
    targetScore: 240,
    speed: 250,
    obstacles: [
      { x: 3, y: 7 }, { x: 3, y: 8 }, { x: 16, y: 7 }, { x: 16, y: 8 },
      { x: 8, y: 3 }, { x: 11, y: 3 }, { x: 8, y: 16 }, { x: 11, y: 16 }
    ],
    theme: {
      bg: 'from-sky-50 to-blue-100',
      grid: '#93C5FD',
      border: 'border-sky-400',
      name: 'Frozen Ocean ❄️',
      bgCol1: '#93C5FD',
      bgCol2: '#DBEAFE'
    }
  },
  {
    level: 8,
    targetScore: 260,
    speed: 240,
    obstacles: [
      { x: 2, y: 2 }, { x: 17, y: 2 }, { x: 2, y: 17 }, { x: 17, y: 17 },
      { x: 6, y: 6 }, { x: 13, y: 6 }, { x: 6, y: 13 }, { x: 13, y: 13 }
    ],
    theme: {
      bg: 'from-green-50 to-emerald-100',
      grid: '#86EFAC',
      border: 'border-emerald-500',
      name: 'Ancient Jungle 🌴',
      bgCol1: '#86EFAC',
      bgCol2: '#DCFCE7'
    }
  },
  {
    level: 9,
    targetScore: 280,
    speed: 230,
    obstacles: [
      { x: 4, y: 10 }, { x: 3, y: 10 }, { x: 5, y: 10 }, { x: 4, y: 9 }, { x: 4, y: 11 },
      { x: 15, y: 10 }, { x: 14, y: 10 }, { x: 16, y: 10 }, { x: 15, y: 9 }, { x: 15, y: 11 }
    ],
    theme: {
      bg: 'from-slate-100 to-slate-200',
      grid: '#CBD5E1',
      border: 'border-slate-500',
      name: 'Haunted Graveyard 👻',
      bgCol1: '#CBD5E1',
      bgCol2: '#F1F5F9'
    }
  },
  {
    level: 10,
    targetScore: 300,
    speed: 220,
    obstacles: [
      { x: 8, y: 4 }, { x: 9, y: 4 }, { x: 11, y: 4 },
      { x: 8, y: 15 }, { x: 9, y: 15 }, { x: 11, y: 15 },
      { x: 4, y: 8 }, { x: 4, y: 9 }, { x: 4, y: 10 }, { x: 4, y: 11 },
      { x: 15, y: 8 }, { x: 15, y: 9 }, { x: 15, y: 10 }, { x: 15, y: 11 }
    ],
    theme: {
      bg: 'from-violet-900 to-indigo-950',
      grid: '#4C1D95',
      border: 'border-indigo-500',
      name: 'Cosmic Blackhole 🌌',
      bgCol1: '#4C1D95',
      bgCol2: '#1E1B4B'
    }
  },
  {
    level: 11,
    targetScore: 320,
    speed: 210,
    obstacles: [
      { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 16, y: 2 }, { x: 17, y: 3 },
      { x: 2, y: 16 }, { x: 3, y: 17 }, { x: 16, y: 17 }, { x: 17, y: 16 },
      { x: 5, y: 9 }, { x: 14, y: 9 }
    ],
    theme: {
      bg: 'from-pink-50 to-rose-100',
      grid: '#FBCFE8',
      border: 'border-pink-400',
      name: 'Candy Wonderland 🍭',
      bgCol1: '#FBCFE8',
      bgCol2: '#FFF1F2'
    }
  },
  {
    level: 12,
    targetScore: 340,
    speed: 200,
    obstacles: [
      { x: 6, y: 6 }, { x: 13, y: 6 },
      { x: 6, y: 13 }, { x: 13, y: 13 }
    ],
    theme: {
      bg: 'from-emerald-950 to-slate-900',
      grid: '#064E3B',
      border: 'border-emerald-400',
      name: 'Emerald Temple 🛕',
      bgCol1: '#064E3B',
      bgCol2: '#022C22'
    }
  },
  {
    level: 13,
    targetScore: 360,
    speed: 190,
    obstacles: [
      { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
      { x: 14, y: 3 }, { x: 15, y: 3 }, { x: 16, y: 3 }, { x: 17, y: 3 }, { x: 18, y: 3 },
      { x: 1, y: 16 }, { x: 2, y: 16 }, { x: 3, y: 16 }, { x: 4, y: 16 }, { x: 5, y: 16 },
      { x: 14, y: 16 }, { x: 15, y: 16 }, { x: 16, y: 16 }, { x: 17, y: 16 }, { x: 18, y: 16 }
    ],
    theme: {
      bg: 'from-orange-950 to-red-950',
      grid: '#7C2D12',
      border: 'border-red-500',
      name: 'Volcanic River 🌋',
      bgCol1: '#7C2D12',
      bgCol2: '#451A03'
    }
  },
  {
    level: 14,
    targetScore: 380,
    speed: 185,
    obstacles: [
      { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 4 },
      { x: 15, y: 3 }, { x: 16, y: 3 }, { x: 16, y: 4 },
      { x: 3, y: 15 }, { x: 3, y: 16 }, { x: 4, y: 16 },
      { x: 16, y: 15 }, { x: 16, y: 16 }, { x: 15, y: 16 }
    ],
    theme: {
      bg: 'from-sky-100 to-indigo-100',
      grid: '#93C5FD',
      border: 'border-blue-400',
      name: 'Sky Haven ☁️',
      bgCol1: '#93C5FD',
      bgCol2: '#EFF6FF'
    }
  },
  {
    level: 15,
    targetScore: 400,
    speed: 180,
    obstacles: [
      { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 },
      { x: 15, y: 5 }, { x: 16, y: 5 }, { x: 17, y: 5 },
      { x: 2, y: 14 }, { x: 3, y: 14 }, { x: 4, y: 14 },
      { x: 15, y: 14 }, { x: 16, y: 14 }, { x: 17, y: 14 }
    ],
    theme: {
      bg: 'from-purple-950 to-slate-950',
      grid: '#581C87',
      border: 'border-fuchsia-500',
      name: 'Neon Arcade 👾',
      bgCol1: '#581C87',
      bgCol2: '#0F0926'
    }
  },
  {
    level: 16,
    targetScore: 420,
    speed: 175,
    obstacles: [
      { x: 5, y: 2 }, { x: 14, y: 2 },
      { x: 2, y: 8 }, { x: 17, y: 8 },
      { x: 2, y: 11 }, { x: 17, y: 11 },
      { x: 5, y: 17 }, { x: 14, y: 17 }
    ],
    theme: {
      bg: 'from-amber-100 to-yellow-200',
      grid: '#FDE68A',
      border: 'border-amber-500',
      name: 'Golden Sandhills 🏜️',
      bgCol1: '#FDE68A',
      bgCol2: '#FEF9C3'
    }
  },
  {
    level: 17,
    targetScore: 440,
    speed: 170,
    obstacles: [
      { x: 5, y: 5 }, { x: 5, y: 14 },
      { x: 14, y: 5 }, { x: 14, y: 14 },
      { x: 2, y: 9 }, { x: 17, y: 9 }
    ],
    theme: {
      bg: 'from-blue-950 to-slate-900',
      grid: '#1E3A8A',
      border: 'border-cyan-400',
      name: 'Frostbite Caves 🥶',
      bgCol1: '#1E3A8A',
      bgCol2: '#0F172A'
    }
  },
  {
    level: 18,
    targetScore: 460,
    speed: 165,
    obstacles: [
      { x: 4, y: 4 }, { x: 15, y: 4 },
      { x: 4, y: 15 }, { x: 15, y: 15 },
      { x: 9, y: 3 }, { x: 10, y: 3 },
      { x: 9, y: 16 }, { x: 10, y: 16 }
    ],
    theme: {
      bg: 'from-teal-900 to-blue-950',
      grid: '#115E59',
      border: 'border-cyan-500',
      name: 'Atlantis Depths 🔱',
      bgCol1: '#115E59',
      bgCol2: '#064E3B'
    }
  },
  {
    level: 19,
    targetScore: 480,
    speed: 160,
    obstacles: [
      { x: 3, y: 3 }, { x: 16, y: 3 },
      { x: 3, y: 16 }, { x: 16, y: 16 },
      { x: 7, y: 7 }, { x: 12, y: 7 },
      { x: 7, y: 12 }, { x: 12, y: 12 }
    ],
    theme: {
      bg: 'from-amber-50 to-orange-100',
      grid: '#FDBA74',
      border: 'border-orange-500',
      name: 'Autumn Harvest 🍁',
      bgCol1: '#FDBA74',
      bgCol2: '#FFF7ED'
    }
  },
  {
    level: 20,
    targetScore: 500,
    speed: 155,
    obstacles: [
      { x: 4, y: 5 }, { x: 5, y: 5 },
      { x: 14, y: 5 }, { x: 15, y: 5 },
      { x: 4, y: 14 }, { x: 5, y: 14 },
      { x: 14, y: 14 }, { x: 15, y: 14 }
    ],
    theme: {
      bg: 'from-neutral-900 to-emerald-950',
      grid: '#022C22',
      border: 'border-green-400',
      name: 'Toxic Lab 🧪',
      bgCol1: '#022C22',
      bgCol2: '#0A0A0A'
    }
  },
  {
    level: 21,
    targetScore: 520,
    speed: 150,
    obstacles: [
      { x: 3, y: 6 }, { x: 16, y: 6 },
      { x: 3, y: 13 }, { x: 16, y: 13 },
      { x: 8, y: 3 }, { x: 11, y: 3 },
      { x: 8, y: 16 }, { x: 11, y: 16 }
    ],
    theme: {
      bg: 'from-indigo-950 to-fuchsia-950',
      grid: '#4A044E',
      border: 'border-fuchsia-400',
      name: 'Nebula Oasis 🌌',
      bgCol1: '#4A044E',
      bgCol2: '#1E1B4B'
    }
  },
  {
    level: 22,
    targetScore: 540,
    speed: 145,
    obstacles: [
      { x: 5, y: 4 }, { x: 6, y: 4 },
      { x: 13, y: 4 }, { x: 14, y: 4 },
      { x: 5, y: 15 }, { x: 6, y: 15 },
      { x: 13, y: 15 }, { x: 14, y: 15 }
    ],
    theme: {
      bg: 'from-rose-50 to-red-100',
      grid: '#FECDD3',
      border: 'border-rose-400',
      name: 'Cherry Sakura 🌸',
      bgCol1: '#FECDD3',
      bgCol2: '#FFF1F2'
    }
  },
  {
    level: 23,
    targetScore: 560,
    speed: 140,
    obstacles: [
      { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 },
      { x: 13, y: 4 }, { x: 14, y: 4 }, { x: 15, y: 4 },
      { x: 4, y: 15 }, { x: 5, y: 15 }, { x: 6, y: 15 },
      { x: 13, y: 15 }, { x: 14, y: 15 }, { x: 15, y: 15 }
    ],
    theme: {
      bg: 'from-slate-900 to-zinc-900',
      grid: '#27272A',
      border: 'border-emerald-600',
      name: 'Emerald Dungeon ⛓️',
      bgCol1: '#18181B',
      bgCol2: '#09090B'
    }
  },
  {
    level: 24,
    targetScore: 580,
    speed: 135,
    obstacles: [
      { x: 3, y: 5 }, { x: 16, y: 5 },
      { x: 3, y: 14 }, { x: 16, y: 14 },
      { x: 6, y: 9 }, { x: 13, y: 9 }
    ],
    theme: {
      bg: 'from-cyan-50 to-sky-100',
      grid: '#7DD3FC',
      border: 'border-cyan-400',
      name: 'Diamond Valley 💎',
      bgCol1: '#7DD3FC',
      bgCol2: '#F0F9FF'
    }
  },
  {
    level: 25,
    targetScore: 600,
    speed: 130,
    obstacles: [
      { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
      { x: 14, y: 3 }, { x: 15, y: 3 }, { x: 16, y: 3 },
      { x: 3, y: 16 }, { x: 4, y: 16 }, { x: 5, y: 16 },
      { x: 14, y: 16 }, { x: 15, y: 16 }, { x: 16, y: 16 },
      { x: 7, y: 7 }, { x: 12, y: 7 },
      { x: 7, y: 12 }, { x: 12, y: 12 }
    ],
    theme: {
      bg: 'from-yellow-950 to-stone-950',
      grid: '#78350F',
      border: 'border-yellow-500',
      name: 'Champion Arena 👑',
      bgCol1: '#78350F',
      bgCol2: '#292524'
    }
  }
];

export const ACHIEVEMENTS = [
  { id: 'first_bite', title: 'First Bite 🍎', description: 'Eat your first food.', icon: '😋' },
  { id: 'half_century', title: 'Half Century 🥉', description: 'Reach 50 points in one game.', icon: '🥉' },
  { id: 'century', title: 'Centurion 💯', description: 'Reach 100 points in one game.', icon: '💯' },
  { id: 'snake_master', title: 'Snake God 👑', description: 'Reach 300 points in one game.', icon: '👑' },
  { id: 'score_500', title: 'Viper Lord 🐉', description: 'Reach 500 points in one game.', icon: '🐉' },
  { id: 'score_1000', title: 'Slytherin Emperor 💀', description: 'Reach a legendary score of 1000 points!', icon: '💀' },
  { id: 'blue_magic', title: 'Blue Sorcerer 🧪', description: 'Eat a Magical Blue Booster.', icon: '🧪' },
  { id: 'star_power', title: 'Star Catcher ⭐', description: 'Eat a Golden Star.', icon: '⭐' },
  { id: 'spicy_run', title: 'Spicy Runner 🌶️', description: 'Eat a Spicy Chili and run fast.', icon: '🔥' },
  { id: 'chili_crying', title: 'Spicy Tears 😭', description: 'Cry funny chili tears for 10 seconds.', icon: '😭' },
  { id: 'magnet_pull', title: 'Magneto 🧲', description: 'Activate magnetic force pull.', icon: '🧲' },
  { id: 'immortal_ghost', title: 'Ghost Mode 👻', description: 'Activate ghost immortality.', icon: '👻' },
  { id: 'shrink_master', title: 'Mini Snake 🍄', description: 'Eat a Shrink Shroom to shrink your length.', icon: '🤏' },
  { id: 'hungry_slitherer', title: 'Voracious Eater 🍔', description: 'Eat 30 foods in a single run.', icon: '🍔' },
  { id: 'double_deal', title: 'Double Jackpot 💎', description: 'Eat food while Double Points is active.', icon: '💎' },
  { id: 'perfect_reflexes', title: 'Speed Demon ⚡', description: 'Control the snake under Hyper Speed.', icon: '⚡' },
  { id: 'combo_king', title: 'Combo Master 🔥', description: 'Reach a high-score combo multiplier!', icon: '💥' },
  { id: 'all_skins', title: 'Fashionista 👗', description: 'Play with at least 3 different skins.', icon: '🎭' },
  { id: 'skin_collector', title: 'Skin Collector 🎭', description: 'Play with at least 6 different skins.', icon: '🕶️' },
  { id: 'level_clear', title: 'Level Explorer 🗺️', description: 'Complete Level 1 in Level Mode.', icon: '🏆' },
  { id: 'level_3_master', title: 'Viper Hunter 🗺️', description: 'Complete Level 3 in Level Mode.', icon: '🛡️' },
  { id: 'volcano_conqueror', title: 'Volcano Conqueror 🌋', description: 'Survive Level 4 in Level Mode.', icon: '🌋' },
  { id: 'cyber_god', title: 'Cyber Legend 🌌', description: 'Complete Level 5 and beat the grid.', icon: '🌌' }
];

export interface BoardTheme {
  id: string;
  name: string;
  color1: string;
  color2: string;
  preview: string[];
}

export const BOARD_THEMES: BoardTheme[] = [
  { id: 'mint', name: 'Mint Forest 🌿', color1: '#C2F5D3', color2: '#E6FCEE', preview: ['#C2F5D3', '#E6FCEE'] },
  { id: 'crimson', name: 'Crimson Velvet 🍎', color1: '#FCA5A5', color2: '#FEE2E2', preview: ['#FCA5A5', '#FEE2E2'] },
  { id: 'butter', name: 'Sweet Butter 🥞', color1: '#FDE68A', color2: '#FEF3C7', preview: ['#FDE68A', '#FEF3C7'] },
  { id: 'lavender', name: 'Royal Lavender 🌌', color1: '#E9D5FF', color2: '#FAF5FF', preview: ['#E9D5FF', '#FAF5FF'] },
  { id: 'sky', name: 'Sky Bubblegum 🏖️', color1: '#BFDBFE', color2: '#DBEAFE', preview: ['#BFDBFE', '#DBEAFE'] },
  { id: 'cyber', name: 'Cyber Shadow 👾', color1: '#1E1B4B', color2: '#0B0A21', preview: ['#1E1B4B', '#0B0A21'] },
  { id: 'chocolate', name: 'Choco Cream 🍫', color1: '#FED7AA', color2: '#FFEDD5', preview: ['#FED7AA', '#FFEDD5'] },
  { id: 'volcano', name: 'Spicy Volcano 🌶️', color1: '#FCA5A5', color2: '#451A03', preview: ['#FCA5A5', '#451A03'] },
  { id: 'neon_arcade', name: 'Neon Arcade 🔮', color1: '#581C87', color2: '#020617', preview: ['#581C87', '#020617'] },
  { id: 'gold_empire', name: 'Gold Empire 👑', color1: '#FBBF24', color2: '#1E1B4B', preview: ['#FBBF24', '#1E1B4B'] }
];

export interface FoodTemplate {
  type: FoodType;
  emoji: string;
  name: string;
  color: string;
  points: number;
  prob: number;
}

export const ALL_FOOD_TEMPLATES: FoodTemplate[] = [
  // First 25 default selected foods
  { type: 'APPLE', emoji: '🍎', name: 'Red Apple', color: '#EF4444', points: 10, prob: 28 },
  { type: 'GOLDEN_STAR', emoji: '⭐', name: 'Golden Star', color: '#FACC15', points: 25, prob: 8 },
  { type: 'CHILI', emoji: '🌶️', name: 'Spicy Chili', color: '#F97316', points: 15, prob: 10 },
  { type: 'GRAPE', emoji: '🍇', name: 'Vibrant Grape', color: '#8B5CF6', points: 15, prob: 10 },
  { type: 'CAKE', emoji: '🍰', name: 'Feast Cake', color: '#FF007F', points: 40, prob: 5 },
  { type: 'BOOSTER', emoji: '🧪', name: 'Magic Potion', color: '#3B82F6', points: 20, prob: 6 },
  { type: 'WATERMELON', emoji: '🍉', name: 'Watermelon', color: '#22C55E', points: 30, prob: 8 },
  { type: 'BANANA', emoji: '🍌', name: 'Sweet Banana', color: '#FBBF24', points: 12, prob: 10 },
  { type: 'COCONUT', emoji: '🥥', name: 'Hard Coconut', color: '#854D0E', points: 20, prob: 8 },
  { type: 'PINEAPPLE', emoji: '🍍', name: 'Pineapple', color: '#EAB308', points: 18, prob: 8 },
  { type: 'DRAGON_FRUIT', emoji: '🐉', name: 'Dragon Fruit', color: '#EC4899', points: 50, prob: 5 },
  { type: 'MEAT', emoji: '🍖', name: 'Juicy Meat', color: '#B45309', points: 35, prob: 8 },
  { type: 'MANGO', emoji: '🥭', name: 'Sweet Mango', color: '#F59E0B', points: 22, prob: 9 },
  { type: 'PIZZA', emoji: '🍕', name: 'Cheesy Pizza', color: '#EF4444', points: 45, prob: 6 },
  { type: 'BURGER', emoji: '🍔', name: 'Classic Burger', color: '#D97706', points: 42, prob: 6 },
  { type: 'PEACH', emoji: '🍑', name: 'Juicy Peach', color: '#FB923C', points: 15, prob: 8 },
  { type: 'KIWI', emoji: '🥝', name: 'Zesty Kiwi', color: '#4ADE80', points: 16, prob: 8 },
  { type: 'PEAR', emoji: '🍐', name: 'Sweet Pear', color: '#A3E635', points: 14, prob: 8 },
  { type: 'ORANGE', emoji: '🍊', name: 'Sweet Orange', color: '#F97316', points: 12, prob: 10 },
  { type: 'BLUEBERRY', emoji: '🫐', name: 'Blueberries', color: '#60A5FA', points: 18, prob: 9 },
  { type: 'CORN', emoji: '🌽', name: 'Sweet Corn', color: '#FBBF24', points: 10, prob: 10 },
  { type: 'SWEET_POTATO', emoji: '🍠', name: 'Sweet Potato', color: '#C084FC', points: 16, prob: 8 },
  { type: 'HONEY', emoji: '🍯', name: 'Honey Jar', color: '#F59E0B', points: 30, prob: 6 },
  { type: 'WAFFLE', emoji: '🧇', name: 'Spiced Waffle', color: '#D97706', points: 25, prob: 7 },
  { type: 'CROISSANT', emoji: '🥐', name: 'Croissant', color: '#F59E0B', points: 20, prob: 8 },

  // Remaining 25 default unselected foods
  { type: 'CHERRY', emoji: '🍒', name: 'Twin Cherries', color: '#DC2626', points: 14, prob: 10 },
  { type: 'AVOCADO', emoji: '🥑', name: 'Fresh Avocado', color: '#10B981', points: 16, prob: 8 },
  { type: 'DOUGHNUT', emoji: '🍩', name: 'Glazed Donut', color: '#EC4899', points: 24, prob: 7 },
  { type: 'SUSHI', emoji: '🍣', name: 'Salmon Sushi', color: '#F87171', points: 32, prob: 7 },
  { type: 'COOKIE', emoji: '🍪', name: 'Choco Cookie', color: '#92400E', points: 18, prob: 9 },
  { type: 'ICE_CREAM', emoji: '🍨', name: 'Ice Cream Cup', color: '#F472B6', points: 26, prob: 7 },
  { type: 'TACO', emoji: '🌮', name: 'Crunchy Taco', color: '#F59E0B', points: 28, prob: 8 },
  { type: 'BROCCOLI', emoji: '🥦', name: 'Green Broccoli', color: '#059669', points: 8, prob: 10 },
  { type: 'CARROT', emoji: '🥕', name: 'Sweet Carrot', color: '#F97316', points: 12, prob: 10 },
  { type: 'CHEESE', emoji: '🧀', name: 'Swiss Cheese', color: '#FBBF24', points: 15, prob: 10 },
  { type: 'FRENCH_FRIES', emoji: '🍟', name: 'Crispy Fries', color: '#FACC15', points: 22, prob: 8 },
  { type: 'HOTDOG', emoji: '🌭', name: 'Sizzling Hotdog', color: '#EA580C', points: 27, prob: 8 },
  { type: 'STRAWBERRY', emoji: '🍓', name: 'Strawberry', color: '#EF4444', points: 13, prob: 11 },
  { type: 'LEMON', emoji: '🍋', name: 'Sour Lemon', color: '#EAB308', points: 11, prob: 11 },
  { type: 'POPCORN', emoji: '🍿', name: 'Hot Popcorn', color: '#F3F4F6', points: 21, prob: 9 },
  { type: 'PANCAKES', emoji: '🥞', name: 'Pancakes', color: '#F59E0B', points: 30, prob: 6 },
  { type: 'PRETZEL', emoji: '🥨', name: 'Hot Pretzel', color: '#B45309', points: 16, prob: 8 },
  { type: 'EGG', emoji: '🍳', name: 'Fried Egg', color: '#FBBF24', points: 14, prob: 9 },
  { type: 'NOODLES', emoji: '🍜', name: 'Hot Ramen', color: '#F59E0B', points: 35, prob: 6 },
  { type: 'DUMPLING', emoji: '🥟', name: 'Dumpling', color: '#FEF08A', points: 25, prob: 7 },
  { type: 'LOLLIPOP', emoji: '🍭', name: 'Lollipop', color: '#F472B6', points: 15, prob: 9 },
  { type: 'CHOCOLATE', emoji: '🍫', name: 'Choco Bar', color: '#78350F', points: 28, prob: 7 },
  { type: 'PUDDING', emoji: '🍮', name: 'Sweet Pudding', color: '#FBBF24', points: 22, prob: 8 },
  { type: 'MILK', emoji: '🥛', name: 'Milk Glass', color: '#F3F4F6', points: 12, prob: 10 },
  { type: 'CUPCAKE', emoji: '🧁', name: 'Cupcake', color: '#EC4899', points: 32, prob: 6 },

  // Always Active Super Powers
  { type: 'POWER_SPEED', emoji: '⚡', name: 'Hyper Speed', color: '#38BDF8', points: 30, prob: 4 },
  { type: 'POWER_IMMORTAL', emoji: '👻', name: 'Ghost Immortal', color: '#A78BFA', points: 30, prob: 4 },
  { type: 'POWER_DOUBLE', emoji: '💎', name: 'Double Points', color: '#F472B6', points: 30, prob: 4 },
  { type: 'POWER_MAGNET', emoji: '🧲', name: 'Magnet Pull', color: '#F87171', points: 30, prob: 4 },
  { type: 'POWER_SHRINK', emoji: '🍄', name: 'Shrink Shroom', color: '#34D399', points: 30, prob: 4 }
];
