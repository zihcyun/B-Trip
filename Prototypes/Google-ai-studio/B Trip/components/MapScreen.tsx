
import React, { useState } from 'react';
import { Search, MapPin, Filter, Navigation, Waypoints, X } from 'lucide-react';
import { MOCK_LOCATIONS, CATEGORIES } from '../constants';
import { Location } from '../types';
import LocationSheet from './LocationSheet';

interface MapScreenProps {
  onSelectLocation: (loc: Location | null) => void;
  selectedLocation: Location | null;
}

const MapScreen: React.FC<MapScreenProps> = ({ onSelectLocation, selectedLocation }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="h-full w-full relative bg-gray-200 overflow-hidden">
      {/* Fake Map Background */}
      <div 
        className="absolute inset-0 bg-[#333] grayscale"
        style={{ 
          backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/121.513,25.012,14,0/600x1200?access_token=pk.eyJ1IjoibW9ja3VwIiwiYSI6ImNrYnd4ZWZ4eDAxMmwydG1vYmZ5bzVnYm0ifQ.abc')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated Map Overlay Simulation */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Floating UI: Search & Categories */}
      <div className="absolute top-4 left-0 right-0 px-4 space-y-3 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white border shadow-sm flex items-center justify-center text-black">
             <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
             </div>
          </div>
          <div className="flex-1 h-10 bg-white rounded-full border shadow-sm flex items-center px-4 space-x-2">
            <Search size={18} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors whitespace-nowrap shadow-sm ${
                activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'
              }`}
            >
              {cat === 'Odd' ? '奇廟' : cat === 'Snacks' ? '怪小吃' : cat === 'Coffee' ? '怪咖' : '醜B'}
            </button>
          ))}
          <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* Markers */}
      {MOCK_LOCATIONS.map(loc => (
        <button
          key={loc.id}
          onClick={() => onSelectLocation(loc)}
          className="absolute transform -translate-x-1/2 -translate-y-full flex flex-col items-center group"
          style={{ top: `${50 + (loc.lat - 25.012) * 500}%`, left: `${50 + (loc.lng - 121.513) * 500}%` }}
        >
          <div className={`p-2 rounded-lg bg-white shadow-lg border-2 transition-transform ${selectedLocation?.id === loc.id ? 'border-black scale-110' : 'border-transparent'}`}>
            <MapPin size={24} className="text-black fill-black/10" />
          </div>
          <div className="bg-black/70 text-white text-[10px] px-2 py-0.5 rounded mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {loc.name}
          </div>
        </button>
      ))}

      {/* Map Tools */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4">
        <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border text-black hover:bg-gray-50">
          <Waypoints size={24} />
        </button>
        <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border text-black hover:bg-gray-50">
          <Navigation size={24} className="transform rotate-45" />
        </button>
      </div>

      {/* Bottom Sheet for Detail */}
      {selectedLocation && (
        <LocationSheet 
          location={selectedLocation} 
          onClose={() => onSelectLocation(null)} 
        />
      )}
    </div>
  );
};

export default MapScreen;
