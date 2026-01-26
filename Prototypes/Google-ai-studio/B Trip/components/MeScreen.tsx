
import React from 'react';
import { Search, ChevronLeft } from 'lucide-react';

interface MeScreenProps {
  onBack: () => void;
}

const MeScreen: React.FC<MeScreenProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-white overflow-y-auto no-scrollbar">
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
        
        <div className="flex flex-col space-y-4">
          <button onClick={onBack} className="p-2 -ml-2 self-start"><ChevronLeft size={24} /></button>
          <h1 className="text-2xl font-bold">Jimmy Chen</h1>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="border border-black rounded-2xl p-6 h-32 flex flex-col justify-between">
          <p className="text-sm font-bold">B coin</p>
          <p className="text-5xl font-bold">0</p>
        </div>
        <div className="border border-black rounded-2xl p-6 h-32 flex flex-col justify-between">
          <p className="text-sm font-bold">My post</p>
          <p className="text-5xl font-bold">0</p>
        </div>
      </div>

      {/* Logout Action */}
      <div className="p-4 mt-4">
        <button className="px-6 py-2 border border-black rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors">
          登出
        </button>
      </div>
    </div>
  );
};

export default MeScreen;
