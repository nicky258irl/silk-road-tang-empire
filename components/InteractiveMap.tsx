import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { HistoricalPoint, PointType } from '../types';
import InfoBubble from './InfoBubble';

interface InteractiveMapProps {
  points: HistoricalPoint[];
  currentYear: number;
}

const MapUpdater: React.FC<{ year: number }> = ({ year }) => {
  const map = useMap();
  // Optional: Auto-pan logic could go here, but might be annoying for UX
  return null;
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ points, currentYear }) => {
  
  // Filter points based on the current year timeline
  const activePoints = points.filter(p => {
    // Show if the event happened before or during current year
    if (p.year > currentYear) return false;
    // Hide if it has an end year and we passed it
    if (p.endYear && currentYear > p.endYear) return false;
    return true;
  });

  const getColor = (type: PointType) => {
    switch (type) {
      case PointType.BATTLE: return '#ef4444';      // Red-500
      case PointType.CITY: return '#2563eb';        // Blue-600
      case PointType.CULTURE: return '#9333ea';     // Purple-600
      case PointType.EVENT: return '#d97706';       // Amber-600
      
      // New Types Colors
      case PointType.ARCHAEOLOGY: return '#ca8a04'; // Yellow-600 (Bronze/Earth)
      case PointType.ECONOMY: return '#16a34a';    // Green-600 (Jade/Money)
      case PointType.RELIGION: return '#e11d48';    // Rose-600 (Fire/Spiritual)
      case PointType.INTELLIGENCE: return '#475569';// Slate-600 (Dark/Hidden)
      case PointType.GOVERNANCE: return '#0891b2';  // Cyan-600 (Official/Bureaucracy)
      case PointType.ROUTE: return '#ea580c';       // Orange-600 (Roads)
      case PointType.REGION: return '#059669';      // Emerald-600 (Land/Territory)
      
      default: return '#57534e';
    }
  };

  return (
    <MapContainer 
      center={[38.0, 95.0]} 
      zoom={4} 
      className="w-full h-full z-0 bg-stone-200"
      minZoom={3}
      maxBounds={[[-10, -20], [85, 180]]} // Restrict roughly to Eurasia
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      
      <MapUpdater year={currentYear} />

      {activePoints.map((point) => (
        <CircleMarker
          key={point.id}
          center={[point.lat, point.lng]}
          pathOptions={{
            color: 'white',
            fillColor: getColor(point.type),
            fillOpacity: 0.8,
            weight: 2,
          }}
          radius={point.type === PointType.CITY || point.type === PointType.REGION ? 8 : 10}
        >
          <Popup closeButton={false}>
            <InfoBubble point={point} />
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};