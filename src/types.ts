export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Position {
  x: number;
  y: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export interface FloatingText {
  id: number;
  text: string;
  x: number;
  y: number;
  color: string;
  life: number;
}

export type FoodType = 
  // 50 Standard Foods
  | 'APPLE' | 'GOLDEN_STAR' | 'GRAPE' | 'CHILI' | 'CAKE' | 'BOOSTER' | 'WATERMELON' | 'BANANA' | 'COCONUT' | 'PINEAPPLE' | 'DRAGON_FRUIT'
  | 'MEAT' | 'MANGO' | 'PIZZA' | 'BURGER' | 'PEACH' | 'KIWI' | 'PEAR' | 'ORANGE' | 'BLUEBERRY' | 'CORN' | 'SWEET_POTATO' | 'HONEY' | 'WAFFLE' | 'CROISSANT'
  | 'CHERRY' | 'AVOCADO' | 'DOUGHNUT' | 'SUSHI' | 'COOKIE' | 'ICE_CREAM' | 'TACO' | 'BROCCOLI' | 'CARROT' | 'CHEESE' | 'FRENCH_FRIES' | 'HOTDOG' | 'STRAWBERRY' | 'LEMON' | 'POPCORN'
  | 'PANCAKES' | 'PRETZEL' | 'EGG' | 'NOODLES' | 'DUMPLING' | 'LOLLIPOP' | 'CHOCOLATE' | 'PUDDING' | 'MILK' | 'CUPCAKE'
  // 5 Special Super Powers
  | 'POWER_SPEED' | 'POWER_IMMORTAL' | 'POWER_DOUBLE' | 'POWER_MAGNET' | 'POWER_SHRINK';

export interface Food {
  position: Position;
  type: FoodType;
  color: string;
  emoji: string;
  points: number;
  pulseScale: number;
  spawnTime?: number;
}

export interface Skin {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  eyeColor: string;
  accessory: 'CROWN' | 'SUNGLASSES' | 'BANDANA' | 'NONE' | 'MUSTACHE';
  pattern: 'SOLID' | 'STRIPES' | 'SPOTS' | 'GLOW';
  description: string;
}

export type GameMode = 'CLASSIC' | 'LEVELS';

export interface LevelConfig {
  level: number;
  targetScore: number;
  speed: number;
  obstacles: Position[];
  theme: {
    bg: string;
    grid: string;
    border: string;
    name: string;
    bgCol1?: string;
    bgCol2?: string;
  };
}
