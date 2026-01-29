"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LayoutGrid, MapPin, Compass, User } from "lucide-react";

const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "/map" : pathname;

  const navItems = [
    { href: "/post", label: "Post", icon: <LayoutGrid size={24} /> },
    { href: "/map", label: "Map", icon: <MapPin size={24} /> },
    { href: "/trip", label: "Trip", icon: <Compass size={24} /> },
    { href: "/me", label: "Me", icon: <User size={24} /> },
  ];

  return (
    <nav className="h-16 bg-white border-t flex items-center justify-around px-4 pb-1">
      {navItems.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive ? "text-black" : "text-gray-400"
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default BottomNav;
