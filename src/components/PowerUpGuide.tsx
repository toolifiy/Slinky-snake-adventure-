import { ALL_FOOD_TEMPLATES } from '../data';

export default function PowerUpGuide() {
  // Categorize food templates and map details dynamically
  const getFoodDetails = (type: string, name: string) => {
    if (type.startsWith('POWER_') || type === 'BOOSTER' || type === 'CHILI' || type === 'GRAPE' || type === 'GOLDEN_STAR') {
      let effect = 'Grants an incredible temporary super-power advantage!';
      if (type === 'POWER_SPEED' || type === 'CHILI') effect = 'FIRE MODE! 1.6x speed, leaves burning spark trails, and doubles combo scores!';
      if (type === 'POWER_IMMORTAL') effect = 'GHOST MODE! Renders you 100% immune to wall crashes and body self-collisions!';
      if (type === 'POWER_DOUBLE') effect = 'DOUBLE DEAL! Doubles all score increments and multipliers!';
      if (type === 'POWER_MAGNET') effect = 'MAGNETIC PULL! Automatically drags all nearby food items directly to your mouth!';
      if (type === 'POWER_SHRINK') effect = 'SHRINK SHROOM! Instantly cuts your tail length by 35% to free up space!';
      if (type === 'BOOSTER') effect = 'BLUE ELIXIR! Laboratory potion that grants a super speed surge that decays slowly.';
      if (type === 'GRAPE') effect = 'CHILL MODE! Instantly slows down movement to help you escape tight, risky corners!';
      if (type === 'GOLDEN_STAR') effect = 'STAR EXPLOSION! Explodes with glittering star particles and shakes the board!';
      
      return {
        category: 'Power-Up ⚡',
        desc: effect,
        color: 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900'
      };
    }

    const fruits = ['APPLE', 'BANANA', 'PINEAPPLE', 'WATERMELON', 'DRAGON_FRUIT', 'MANGO', 'PEACH', 'KIWI', 'PEAR', 'ORANGE', 'BLUEBERRY', 'CHERRY', 'AVOCADO', 'STRAWBERRY', 'LEMON'];
    if (fruits.includes(type)) {
      return {
        category: 'Fresh Fruit 🍎',
        desc: `Fresh, juicy, and sweet! Perfect standard food item that increases length and score.`,
        color: 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900'
      };
    }

    const sweets = ['CAKE', 'HONEY', 'WAFFLE', 'CROISSANT', 'DOUGHNUT', 'COOKIE', 'ICE_CREAM', 'PANCAKES', 'LOLLIPOP', 'CHOCOLATE', 'PUDDING', 'CUPCAKE'];
    if (sweets.includes(type)) {
      return {
        category: 'Sweet Treat 🧁',
        desc: `Delectable sugar rush! Delicious pastry crumb explosion that grows you big and tall.`,
        color: 'bg-pink-50 border-pink-200 text-pink-700 dark:bg-pink-950/20 dark:border-pink-900'
      };
    }

    return {
      category: 'Savory Meal 🍕',
      desc: `Hearty and satisfying! Professional gaming meal that grants high points to climb the charts.`,
      color: 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/20 dark:border-amber-900'
    };
  };

  const processedItems = ALL_FOOD_TEMPLATES.map((food) => {
    const details = getFoodDetails(food.type, food.name);
    return {
      emoji: food.emoji,
      name: food.name,
      points: `+${food.points} pts`,
      category: details.category,
      effect: details.desc,
      color: details.color,
    };
  });

  return (
    <div className="bg-emerald-50 dark:bg-slate-800/80 p-5 rounded-3xl border-4 border-emerald-400 shadow-lg">
      <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 text-center mb-1 font-sans flex items-center justify-center gap-2">
        🍎 Power-Up Menu & Food Guide 🍰
      </h3>
      <p className="text-[10px] text-emerald-500 text-center uppercase tracking-wider font-bold mb-4">
        Explore and Eat over {processedItems.length} different foods!
      </p>
      
      <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-emerald-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {processedItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-3 rounded-2xl border-2 transition-all hover:scale-[1.01] ${item.color}`}
          >
            <span className="text-3xl animate-bounce" style={{ animationDelay: `${idx * 0.05}s`, animationDuration: '3s' }}>
              {item.emoji}
            </span>
            <div className="flex-1">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 flex items-center gap-1.5 flex-wrap">
                    {item.name}
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 font-black tracking-wide uppercase">
                      {item.category}
                    </span>
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-900 border border-current shrink-0">
                  {item.points}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {item.effect}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
