export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: string;
  heroTitle: string;
  heroSubtitle: string;
  backgroundImage: string;
  cardImage: string;
}

const SLIDER_IMAGES: { file: string; name: string; country: string; rating: string; heroTitle: string; heroSubtitle: string }[] = [
  { file: '0ac063cf43554c04b070e480da4a6de3.jpg', name: 'Global Summit', country: 'Singapore', rating: '9.2 ★', heroTitle: 'Connect Globally', heroSubtitle: 'Corporate Summit' },
  { file: '0cd70f09a5b1fad7ee9f29f12dbd1c5e.jpg', name: 'Bush House', country: 'Kenya', rating: '9.1 ★', heroTitle: 'Escape to Nature', heroSubtitle: 'Bush House' },
  { file: '7c6c5cdb3979e2b4bcbebb538fd1757b.jpg', name: 'Mountain Escape', country: 'Switzerland', rating: '9.0 ★', heroTitle: 'Conquer the Alps', heroSubtitle: 'Mountain Escape' },
];

export const HERO_DESTINATIONS: Destination[] = [
  {
    id: 'bali',
    name: 'Bali Paradise',
    country: 'Indonesia',
    rating: '9.2 ★',
    heroTitle: 'Discover Bali',
    heroSubtitle: 'Tropical Paradise',
    backgroundImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  ...SLIDER_IMAGES.map((s, i) => ({
    id: `slide-${i}`,
    name: s.name,
    country: s.country,
    rating: s.rating,
    heroTitle: s.heroTitle,
    heroSubtitle: s.heroSubtitle,
    backgroundImage: `/Hero-slider/${s.file}`,
    cardImage: `/Hero-slider/${s.file}`,
  })),
  {
    id: 'golden-horizon',
    name: 'Golden Horizon',
    country: 'Maldives',
    rating: '8.8 ★',
    heroTitle: 'Sunset Dreams',
    heroSubtitle: 'Golden Horizon',
    backgroundImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
  },
];