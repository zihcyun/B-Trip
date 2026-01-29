"use client";

import React, { useState } from "react";
import { Search, MapPin, Filter, Navigation, Waypoints } from "lucide-react";
import { MOCK_LOCATIONS, CATEGORIES } from "../constants";
import { Location } from "../types";
import LocationSheet from "./LocationSheet";

interface MapScreenProps {
  onSelectLocation: (loc: Location | null) => void;
  selectedLocation: Location | null;
}

const MapScreen: React.FC<MapScreenProps> = ({
  onSelectLocation,
  selectedLocation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryLabels: Record<string, string> = {
    Odd: "奇廟",
    Snacks: "怪小吃",
    Coffee: "怪咖",
    "Ugly B": "醜B",
  };

  return (
    <div
      className="h-full w-full relative overflow-hidden map-root"
      onClick={() => onSelectLocation(null)}
    >
      {/* Fake Map Background */}
      <div className="absolute inset-0 map-image z-0">
        <img
          src="/map-custom.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 map-image-overlay" />
      </div>

      {/* Floating UI: Search & Categories */}
      <div
        className="absolute top-4 left-0 right-0 px-4 space-y-3 z-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center map-fab map-fab--darkglass map-fab--small">
            <div className="grid grid-cols-2 gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
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

        <div className="flex items-center gap-2 pb-1">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat === activeCategory ? null : cat)
                }
                className="px-4 py-1.5 rounded-full border text-sm font-medium transition-colors whitespace-nowrap map-fab--darkglass text-white border-[rgba(180,180,180,0.6)]"
              >
                {categoryLabels[cat] ?? cat}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-full map-fab map-fab--darkglass map-fab--small">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* Markers */}
      {MOCK_LOCATIONS.map((loc, index) => {
        const spreadOffsets = [
          { x: -78, y: -68 },
          { x: 70, y: -30 },
          { x: -26, y: 52 },
          { x: 78, y: 52 },
          { x: -62, y: 88 },
        ];
        const offset = spreadOffsets[index % spreadOffsets.length];
        const isSelected = selectedLocation?.id === loc.id;

        return (
          <button
            key={loc.id}
            onClick={(event) => {
              event.stopPropagation();
              onSelectLocation(loc);
            }}
            className={`absolute transform -translate-x-1/2 -translate-y-full flex flex-col items-center marker-button ${
              isSelected ? "marker-selected" : "marker-muted"
            }`}
            style={{
              top: `calc(${50 + (loc.lat - 25.012) * 500}% + ${offset.y}px)`,
              left: `calc(${50 + (loc.lng - 121.513) * 500}% + ${offset.x}px)`,
            }}
          >
            <div className="marker-icon">
              <MapPin size={18} className="marker-pin" />
            </div>
            {isSelected && <div className="marker-label">{loc.name}</div>}
          </button>
        );
      })}

      {/* Map Tools */}
      <div
        className={`absolute right-4 top-1/2 -translate-y-1/2 map-tools items-center flex flex-col gap-3 ${
          selectedLocation ? "map-tools-raised" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="w-12 h-12 rounded-full flex items-center justify-center map-fab map-fab--darkglass">
          <Waypoints size={24} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center map-fab map-fab--darkglass">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white transform rotate-[-135deg]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 3.5L20.5 12L4 20.5L7.5 12Z" />
          </svg>
        </button>
      </div>

      {/* Bottom Sheet for Detail */}
      {selectedLocation && (
        <div onClick={(event) => event.stopPropagation()}>
          <LocationSheet
            location={selectedLocation}
            onClose={() => onSelectLocation(null)}
          />
        </div>
      )}
    </div>
  );
};

export default MapScreen;
