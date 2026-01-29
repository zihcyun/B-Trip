import React from "react";
import BottomNav from "./BottomNav";

interface AppFrameProps {
  children: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-white overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 relative overflow-hidden">{children}</div>
      <BottomNav />
    </div>
  );
};

export default AppFrame;
