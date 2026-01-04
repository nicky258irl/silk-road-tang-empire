import React, { useState } from 'react';
import { InteractiveMap } from './components/InteractiveMap';
import TimeSlider from './components/TimeSlider';
import { HISTORICAL_POINTS, TIME_RANGE } from './data';
import { BookOpen, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(630); // Start at Tang peak/defeat of Turks
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden relative">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 z-[1000] pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="bg-white/90 backdrop-blur shadow-lg p-4 rounded-xl pointer-events-auto max-w-md border border-stone-200">
            <h1 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <BookOpen className="text-amber-600" />
              丝绸之路与唐帝国
            </h1>
            <p className="text-sm text-stone-600 mt-1">
              基于森安孝夫（Takao Moriyasu）的研究，可视化粟特、突厥、回鹘与唐帝国的历史互动。
            </p>
          </div>
          
          <button 
            onClick={() => setShowIntro(true)}
            className="bg-white/90 backdrop-blur shadow p-2 rounded-full hover:bg-stone-100 pointer-events-auto text-stone-600"
          >
            <Info size={24} />
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        <InteractiveMap points={HISTORICAL_POINTS} currentYear={currentYear} />
      </div>

      {/* Timeline Control */}
      <TimeSlider currentYear={currentYear} onYearChange={setCurrentYear} />

      {/* Intro Modal */}
      {showIntro && (
        <div className="fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4 border-b pb-2">
              关于本可视化项目
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                本交互式地图基于森安孝夫（Takao Moriyasu）的著作<strong>《丝绸之路与唐帝国》</strong>。
                它挑战了传统的中华中心史观，强调了<strong>粟特商业网络</strong>的关键作用以及<strong>突厥和回鹘帝国</strong>的军事力量在欧亚大陆历史中的中心地位。
              </p>
              <p>
                <strong>如何使用：</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>拖动底部的<strong>时间轴</strong>穿越历史（公元300年 - 900年）。</li>
                <li>观察随着年份变化而在地图上出现的城市、战役和事件。</li>
                <li><strong>点击地图上的圆点</strong>阅读源自原书的历史背景知识卡片。</li>
              </ul>
              <div className="bg-stone-100 p-4 rounded-lg mt-4 border-l-4 border-amber-500">
                <p className="text-sm italic">
                  “唐朝不仅仅是一个汉人王朝，而是一个建立在汉人与北方游牧民族融合基础上的‘拓跋国家’。” —— 森安孝夫
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setShowIntro(false)}
                className="bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors"
              >
                开始探索
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;