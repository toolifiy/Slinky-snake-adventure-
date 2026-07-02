import { ACHIEVEMENTS } from '../data';

interface AchievementsBoxProps {
  unlockedList: string[];
}

export default function AchievementsBox({ unlockedList }: AchievementsBoxProps) {
  return (
    <div className="bg-violet-50 dark:bg-slate-800/80 p-5 rounded-3xl border-4 border-violet-400 shadow-lg">
      <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 text-center mb-1 font-sans flex items-center justify-center gap-2">
        🏆 Star Achievements 🏆
      </h3>
      <p className="text-[10px] text-violet-500 text-center uppercase tracking-wider font-bold mb-4">
        Unlocked: {unlockedList.length} of {ACHIEVEMENTS.length}
      </p>

      <div className="grid grid-cols-1 gap-2.5 max-h-72 overflow-y-auto pr-1">
        {ACHIEVEMENTS.map((ach) => {
          const isUnlocked = unlockedList.includes(ach.id);
          return (
            <div
              key={ach.id}
              className={`flex items-center gap-3 p-2.5 rounded-2xl border-2 transition-all ${
                isUnlocked
                  ? 'bg-violet-100/60 dark:bg-violet-950/20 border-violet-300 text-slate-800 dark:text-slate-100'
                  : 'bg-white dark:bg-slate-700/50 border-slate-200 dark:border-slate-800 opacity-60 text-slate-400 dark:text-slate-500'
              }`}
            >
              {/* Badge Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center text-xl rounded-full border-2 ${
                  isUnlocked
                    ? 'bg-amber-300 border-amber-500 scale-110 shadow-md animate-pulse'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                }`}
              >
                {isUnlocked ? ach.icon : '🔒'}
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-xs truncate ${isUnlocked ? 'text-violet-900 dark:text-violet-300' : 'text-slate-400'}`}>
                  {ach.title}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                  {ach.description}
                </p>
              </div>

              {isUnlocked && (
                <span className="text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-full border border-amber-400">
                  COMPLETED
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
