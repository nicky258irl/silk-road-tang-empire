import React from 'react';
import { HistoricalPoint, PointType } from '../types';
import { 
  MapPin, 
  Swords, 
  ScrollText, 
  Landmark, 
  Pickaxe, 
  Coins, 
  Flame, 
  Eye, 
  Scale, 
  Route, 
  Globe 
} from 'lucide-react';

interface InfoBubbleProps {
  point: HistoricalPoint;
}

const InfoBubble: React.FC<InfoBubbleProps> = ({ point }) => {
  const getIcon = () => {
    switch (point.type) {
      case PointType.BATTLE: return <Swords size={16} className="text-red-600" />;
      case PointType.CITY: return <MapPin size={16} className="text-blue-600" />;
      case PointType.CULTURE: return <ScrollText size={16} className="text-purple-600" />;
      case PointType.EVENT: return <Landmark size={16} className="text-amber-600" />;
      
      // New Types Icons
      case PointType.ARCHAEOLOGY: return <Pickaxe size={16} className="text-yellow-700" />;
      case PointType.ECONOMY: return <Coins size={16} className="text-green-600" />;
      case PointType.RELIGION: return <Flame size={16} className="text-rose-600" />;
      case PointType.INTELLIGENCE: return <Eye size={16} className="text-slate-700" />;
      case PointType.GOVERNANCE: return <Scale size={16} className="text-cyan-600" />;
      case PointType.ROUTE: return <Route size={16} className="text-orange-600" />;
      case PointType.REGION: return <Globe size={16} className="text-emerald-600" />;
      default: return <MapPin size={16} className="text-stone-600" />;
    }
  };

  const getTypeLabel = () => {
    switch (point.type) {
      case PointType.BATTLE: return "历史战役";
      case PointType.CITY: return "关键城市";
      case PointType.CULTURE: return "文化里程碑";
      case PointType.EVENT: return "历史事件";
      
      // New Types Labels
      case PointType.ARCHAEOLOGY: return "考古发现";
      case PointType.ECONOMY: return "经济与贸易";
      case PointType.RELIGION: return "宗教传播";
      case PointType.INTELLIGENCE: return "情报与网络";
      case PointType.GOVERNANCE: return "政治制度";
      case PointType.ROUTE: return "交通路线";
      case PointType.REGION: return "地理区域";
      default: return "历史记录";
    }
  };

  return (
    <div className="flex flex-col gap-2 p-1 min-w-[260px]">
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2 mb-1">
        {getIcon()}
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
          {getTypeLabel()}
        </span>
        <span className="ml-auto text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-600">
          公元 {point.year} 年
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-stone-900 font-serif leading-tight">
        {point.name}
      </h3>
      
      <p className="text-sm font-medium text-stone-800">
        {point.description}
      </p>
      
      <div className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-2 rounded border border-stone-100 mt-1">
        {point.details}
      </div>

      {point.characters && point.characters.length > 0 && (
        <div className="mt-2 pt-2 border-t border-stone-100">
          <span className="text-xs font-semibold text-stone-500 block mb-1">关键人物：</span>
          <div className="flex flex-wrap gap-1">
            {point.characters.map((char) => (
              <span key={char} className="text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-100">
                {char}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBubble;