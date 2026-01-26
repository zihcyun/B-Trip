
import React from 'react';
import { Search, ChevronLeft, ChevronDown, Trash2 } from 'lucide-react';
import { MOCK_TRIPS } from '../constants';

const TripScreen: React.FC = () => {
  const activeTrip = MOCK_TRIPS.find(t => t.isActive);

  return (
    <div className="h-full bg-white overflow-y-auto no-scrollbar pb-20">
      {/* Header */}
      <div className="p-4 bg-white sticky top-0 z-20">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-white border shadow-sm flex items-center justify-center text-black">
             <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
             </div>
          </div>
          <div className="flex-1 h-10 bg-white rounded-full border shadow-sm flex items-center px-4 space-x-2">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm w-full" />
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 -ml-2"><ChevronLeft size={24} /></button>
            <h1 className="text-2xl font-bold">今日行程</h1>
          </div>
          <div className="flex items-center space-x-1 border rounded-lg px-3 py-1.5 text-xs font-medium">
            <span>{activeTrip?.name}</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Active Trip Details */}
      <div className="px-4 mb-10">
        <h2 className="text-lg font-bold mb-4">{activeTrip?.name}</h2>
        <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-black">
          {activeTrip?.locations.map((loc, idx) => (
            <div key={loc.id} className="relative flex items-start justify-between">
              <div className="absolute -left-[19px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-black z-10" />
              <div className="flex-1">
                <p className="text-sm font-bold">{loc.name}</p>
                <p className="text-[10px] text-gray-400">{loc.address}</p>
              </div>
              <input type="checkbox" className="w-5 h-5 border-2 border-black rounded focus:ring-0" />
            </div>
          ))}
        </div>
        <button className="mt-6 px-5 py-2 border border-black rounded-full text-xs font-bold">編輯行程</button>
      </div>

      {/* All Trips List */}
      <div className="px-4">
        <h2 className="text-lg font-bold mb-4">所有行程</h2>
        <div className="space-y-3">
          {MOCK_TRIPS.map(trip => (
            <div key={trip.id} className={`flex border rounded-xl overflow-hidden shadow-sm h-16 ${trip.isActive ? 'bg-gray-50 opacity-60' : ''}`}>
              <div className="w-20 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-bold border-r">IMG</div>
              <div className="flex-1 px-3 flex items-center justify-between">
                <p className="text-sm font-bold">
                  {trip.name} {trip.isActive && <span className="ml-2 text-[10px] text-gray-500 font-medium">使用中</span>}
                </p>
                <button className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripScreen;
