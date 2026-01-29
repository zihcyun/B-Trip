export type Screen = "post" | "map" | "trip" | "me";

export interface Location {
  id: string;
  name: string;
  address: string;
  distance: string;
  category: string;
  lat: number;
  lng: number;
  image?: string;
}

export interface Trip {
  id: string;
  name: string;
  locations: Location[];
  isActive: boolean;
}

export interface Post {
  id: string;
  author: string;
  title: string;
  description: string;
  image: string;
}
