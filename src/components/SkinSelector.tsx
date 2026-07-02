import { Skin } from '../types';
import { SNAKE_SKINS } from '../data';
import { playClickSound } from '../utils/audio';
import SnakeHeadPreview from './SnakeHeadPreview';

interface SkinSelectorProps {
  selectedSkin: Skin;
  onSelectSkin: (skin: Skin) => void;
  unlockedSkinsCount?: number;
}

export default function SkinSelector({ selectedSkin, onSelectSkin }: SkinSelectorProps) {
  const handleSelect = (skin: Skin) => {
    playClickSound();
    onSelectSkin(skin);
    
    // Add to played skins list to track "Fashionista" achievement
    const played = JSON.parse(localStorage.getItem('snake_played_skins') || '[]');
    if (!played.includes(skin.id)) {
      played.push(skin.id);
      localStorage.setItem('snake_played_skins', JSON.stringify(played));
    }
  };

  return (
    <div className="bg-amber-50 dark:bg-slate-800/80 p-5 rounded-3xl border-4 border-amber-400 shadow-lg">
      <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 text-center mb-4 font-sans flex items-center justify-center gap-2">
        🎭 Choose Your Snake Hero! 🎭
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {SNAKE_SKINS.map((skin) => {
          const isSelected = skin.id === selectedSkin.id;
          return (
            <button
              key={skin.id}
              onClick={() => handleSelect(skin)}
              className={`p-3 rounded-2xl border-4 transition-all duration-200 flex flex-col items-center justify-between text-center gap-2 cursor-pointer group hover:scale-105 active:scale-95 ${
                isSelected
                  ? 'bg-amber-300 dark:bg-amber-500/30 border-amber-500 shadow-[0_6px_0_#D97706]'
                  : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 hover:border-amber-400 shadow-[0_4px_0_#CBD5E1] dark:shadow-[0_4px_0_#1E293B]'
              }`}
            >
              {/* Snake Head visual preview */}
              <div className="relative w-14 h-14 flex items-center justify-center bg-slate-900/5 dark:bg-slate-950/20 rounded-full border border-slate-950/5 shadow-inner">
                <SnakeHeadPreview skin={skin} size={52} />
              </div>

              {/* Skin Info */}
              <div>
                <p className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-300">
                  {skin.name}
                </p>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 uppercase font-mono font-bold">
                  {skin.accessory !== 'NONE' ? skin.accessory : 'Classic'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="mt-4 p-3 bg-amber-100/50 dark:bg-slate-900/50 rounded-xl text-center">
        <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold italic">
          &ldquo;{selectedSkin.description}&rdquo;
        </p>
      </div>
    </div>
  );
}
