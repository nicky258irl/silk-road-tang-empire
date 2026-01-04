export enum PointType {
  CITY = 'CITY',
  EVENT = 'EVENT',
  BATTLE = 'BATTLE',
  CULTURE = 'CULTURE',
  ARCHAEOLOGY = 'ARCHAEOLOGY',
  REGION = 'REGION',
  ECONOMY = 'ECONOMY',
  RELIGION = 'RELIGION',
  INTELLIGENCE = 'INTELLIGENCE',
  GOVERNANCE = 'GOVERNANCE',
  ROUTE = 'ROUTE'
}

export interface HistoricalPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  year: number; // The year it appears/becomes relevant
  endYear?: number; // Optional year it disappears or becomes less relevant
  type: PointType;
  description: string;
  details: string; // Richer text from the book
  characters?: string[]; // Key figures mentioned
}

export interface TimeEra {
  label: string;
  start: number;
  end: number;
  description: string;
}