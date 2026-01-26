
import React from 'react';
import { Screen } from '../types';
import { LayoutGrid, MapPin, Compass, User } from 'lucide-react';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems: { id: Screen; label: string; icon: React.ReactNode }[] = [
    { id: 'post', label: 'Post', icon: <LayoutGrid size={24} /> },
    { id: 'map', label: 'Map', icon: <MapPin size={24} /> },
    { id: 'trip', label: 'Trip', icon: <Compass size={24} /> },
    { id: 'me', label: 'Me', icon: <User size={24} /> },
  ];

  return (
    <nav className="h-16 bg-white border-t flex items-center justify-around px-4 pb-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveScreen(item.id)}
          className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
            activeScreen === item.id ? 'text-black' : 'text-gray-400'
          }`}
        >
          {item.icon}
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
