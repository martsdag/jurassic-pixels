export interface Dinosaur {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  type: string;
  diet: string;
  location?: string[];
  coordinates?: { lat: number; lng: number };
  favorites: { text: string; emoji: string }[];
  dislikes: { text: string; emoji: string }[];
}
