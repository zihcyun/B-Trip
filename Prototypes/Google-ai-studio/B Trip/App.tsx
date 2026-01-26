
import React, { useState } from 'react';
import { Screen, Location } from './types';
import MapScreen from './components/MapScreen';
import PostScreen from './components/PostScreen';
import TripScreen from './components/TripScreen';
import MeScreen from './components/MeScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('map');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'map':
        return <MapScreen 
                  onSelectLocation={setSelectedLocation} 
                  selectedLocation={selectedLocation} 
                />;
      case 'post':
        return <PostScreen />;
      case 'trip':
        return <TripScreen />;
      case 'me':
        return <MeScreen onBack={() => setActiveScreen('map')} />;
      default:
        return <MapScreen onSelectLocation={setSelectedLocation} selectedLocation={selectedLocation} />;
    }
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-white overflow-hidden flex flex-col shadow-2xl">
      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {renderScreen()}
      </div>

      {/* Persistent Bottom Navigation */}
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;
