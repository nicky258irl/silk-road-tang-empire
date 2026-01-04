import React from 'react';
import { ERAS, TIME_RANGE } from '../data';

interface TimeSliderProps {
  currentYear: number;
  onYearChange: (year: number) => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({ currentYear, onYearChange }) => {
  const activeEra = ERAS.find(era => currentYear >= era.start && currentYear <= era.end);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-900/90 backdrop-blur-md text-stone-100 p-6 z-[1000] border-t border-stone-700 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-sm uppercase tracking-widest text-amber-500 font-semibold mb-1">
              当前时代
            </div>
            <div className="text-2xl font-bold font-serif text-white">
              {activeEra ? activeEra.label : "过渡时期"}
            </div>
            <div className="text-stone-400 text-sm mt-1 max-w-xl">
              {activeEra ? activeEra.description : "权力更迭与贸易路线演变的时期。"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-5xl font-mono font-bold text-amber-500">
              {currentYear} <span className="text-xl text-stone-400">公元</span>
            </div>
          </div>
        </div>

        <div className="relative pt-6 pb-2">
          <input
            type="range"
            min={TIME_RANGE.min}
            max={TIME_RANGE.max}
            value={currentYear}
            onChange={(e) => onYearChange(Number(e.target.value))}
            className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
          />
          <div className="flex justify-between text-xs text-stone-500 mt-2 font-mono">
            <span>公元 {TIME_RANGE.min}</span>
            {ERAS.map((era) => (
              <span key={era.label} className="hidden sm:block" style={{ left: `${((era.start - TIME_RANGE.min) / (TIME_RANGE.max - TIME_RANGE.min)) * 100}%`, position: 'absolute', top: 32 }}>
                | {era.start}
              </span>
            ))}
            <span>公元 {TIME_RANGE.max}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlider;