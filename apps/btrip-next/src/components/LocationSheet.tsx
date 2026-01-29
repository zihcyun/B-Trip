"use client";

import React, { useState } from "react";
import { Location } from "../types";
import { Trash2, ChevronDown } from "lucide-react";

interface LocationSheetProps {
  location: Location;
  onClose: () => void;
}

const LocationSheet: React.FC<LocationSheetProps> = ({ location, onClose }) => {
  const [showTripSelect, setShowTripSelect] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 animate-slide-up location-sheet">
      {/* Semi-transparent Overlay Background */}
      <div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] p-6 pb-10 location-sheet-card">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

        {/* Header Actions */}
        <div className="flex items-start justify-between mb-2 location-sheet-header">
          <h2 className="text-xl font-bold text-black location-sheet-title">
            {location.name}
          </h2>
          <div className="flex space-x-2 location-sheet-actions">
            <button
              onClick={() => setShowTripSelect(!showTripSelect)}
              className="px-3 py-1.5 rounded-full border border-black text-xs font-medium bg-white hover:bg-gray-50"
            >
              加入行程
            </button>
            <button className="px-3 py-1.5 rounded-full border border-black text-xs font-medium bg-white hover:bg-gray-50">
              儲存地點
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-full border border-black text-xs font-medium bg-white hover:bg-gray-50"
            >
              關閉
            </button>
          </div>
        </div>

        {/* Address and Distance */}
        <div className="text-xs text-gray-500 mb-6 space-y-0.5">
          <p>{location.address}</p>
          <p>距離你 {location.distance}</p>
        </div>

        {/* Dropdown Itinerary Selection (Mock) */}
        {showTripSelect && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mb-8 bg-white border rounded-xl shadow-xl p-4 w-[80%] z-20">
            <p className="text-xs font-medium text-gray-400 mb-2">選擇行程</p>
            <div className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm cursor-pointer">
              <span>永和B級景點</span>
              <ChevronDown size={16} />
            </div>
          </div>
        )}

        {/* Current Itinerary List */}
        <div>
          <h3 className="text-lg font-bold mb-4">今日行程</h3>
          <div className="space-y-3">
            <div className="flex border rounded-xl overflow-hidden shadow-sm h-16">
              <div className="w-20 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-bold border-r">
                IMG
              </div>
              <div className="flex-1 px-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold">A</span>
                  <div>
                    <p className="text-sm font-bold">田中怪廟</p>
                    <p className="text-[10px] text-gray-400 truncate w-32">
                      彰化縣文林北路38巷7號旁
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="flex border rounded-xl overflow-hidden shadow-sm h-16">
              <div className="w-20 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-bold border-r">
                IMG
              </div>
              <div className="flex-1 px-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold">B</span>
                  <div>
                    <p className="text-sm font-bold">豬肉冰</p>
                    <p className="text-[10px] text-gray-400 truncate w-32">
                      彰化縣中山路78巷1號
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default LocationSheet;
