"use client";

import React, { useState } from "react";
import AppFrame from "../../components/AppFrame";
import MapScreen from "../../components/MapScreen";
import { Location } from "../../types";

const MapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <AppFrame>
      <MapScreen
        onSelectLocation={setSelectedLocation}
        selectedLocation={selectedLocation}
      />
    </AppFrame>
  );
};

export default MapPage;
