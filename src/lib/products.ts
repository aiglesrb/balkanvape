export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
  puffs: string;
  badge: '' | 'hot' | 'new' | 'sale';
  cats: string[];
  stock: number;
  rating: number;
  reviews: number;
}

export const PRODUCTS: Product[] = [
  { id: 'tornado-grape', name: 'Tornado 10000 Grožđe', emoji: '🍇', price: 22, puffs: '≈ 10 000 puffs', badge: 'hot', cats: ['vocni', 'ledeni'], stock: 8, rating: 4.9, reviews: 234 },
  { id: 'hawk-lubenica', name: 'Hawk Pro Lubenica Ice', emoji: '🍉', price: 18, puffs: '≈ 8 000 puffs', badge: 'new', cats: ['vocni', 'ledeni'], stock: 23, rating: 4.7, reviews: 89 },
  { id: 'tornado-mango', name: 'Tornado Mango Breskva', emoji: '🥭', price: 22, puffs: '≈ 10 000 puffs', badge: 'hot', cats: ['tropski', 'vocni'], stock: 5, rating: 4.8, reviews: 312 },
  { id: 'hawk-jagoda', name: 'Hawk Jagoda Kivi', emoji: '🍓', price: 18, puffs: '≈ 8 000 puffs', badge: '', cats: ['slatki', 'vocni'], stock: 31, rating: 4.5, reviews: 67 },
  { id: 'tornado-narandza', name: 'Tornado Narandža Citrus', emoji: '🍊', price: 20, puffs: '≈ 10 000 puffs', badge: 'sale', cats: ['vocni'], stock: 12, rating: 4.6, reviews: 145 },
  { id: 'hawk-mint', name: 'Hawk Cool Mint', emoji: '🌿', price: 18, puffs: '≈ 8 000 puffs', badge: '', cats: ['mentol'], stock: 19, rating: 4.4, reviews: 98 },
  { id: 'tornado-cola', name: 'Tornado Cola Ice', emoji: '🥤', price: 20, puffs: '≈ 10 000 puffs', badge: 'new', cats: ['ledeni', 'slatki'], stock: 15, rating: 4.7, reviews: 56 },
  { id: 'hawk-lychee', name: 'Hawk Lychee Mint', emoji: '🍈', price: 18, puffs: '≈ 8 000 puffs', badge: '', cats: ['tropski', 'mentol'], stock: 27, rating: 4.3, reviews: 42 },
  { id: 'tornado-passion', name: 'Tornado Passion Fruit', emoji: '🌺', price: 22, puffs: '≈ 10 000 puffs', badge: '', cats: ['tropski'], stock: 9, rating: 4.6, reviews: 78 },
  { id: 'hawk-blueberry', name: 'Hawk Blueberry Sour', emoji: '🫐', price: 15, puffs: '≈ 8 000 puffs', badge: 'sale', cats: ['slatki', 'vocni'], stock: 6, rating: 4.8, reviews: 203 },
  { id: 'tornado-peach', name: 'Tornado Peach Ice', emoji: '🍑', price: 22, puffs: '≈ 10 000 puffs', badge: 'hot', cats: ['vocni', 'ledeni'], stock: 3, rating: 4.9, reviews: 189 },
  { id: 'hawk-menthol', name: 'Hawk Double Menthol', emoji: '❄️', price: 15, puffs: '≈ 8 000 puffs', badge: '', cats: ['mentol', 'ledeni'], stock: 22, rating: 4.5, reviews: 134 },
];

export const BADGE_MAP: Record<string, { label: string; cls: string }> = {
  hot: { label: 'Bestseller', cls: 'bg-foreground text-background' },
  new: { label: 'New', cls: 'bg-accent text-accent-foreground' },
  sale: { label: '-10%', cls: 'bg-destructive text-destructive-foreground' },
};

export const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '' },
  { id: 'vocni', label: 'Fruity', emoji: '🍇' },
  { id: 'mentol', label: 'Menthol', emoji: '🌿' },
  { id: 'tropski', label: 'Tropical', emoji: '🥭' },
  { id: 'ledeni', label: 'Ice', emoji: '❄️' },
  { id: 'slatki', label: 'Sweet', emoji: '🍬' },
];

export const CUSTOMER_REVIEWS = [
  { name: 'Marko P.', city: 'Belgrade', rating: 5, text: 'Best flavor I\'ve ever tried. The Grape Tornado is phenomenal. Delivered in 20 hours.', product: 'Tornado 10000 Grožđe', emoji: '🍇' },
  { name: 'Ana S.', city: 'Novi Sad', rating: 5, text: 'Third order already. Always authentic products, discreet packaging. Highly recommended!', product: 'Hawk Pro Lubenica Ice', emoji: '🍉' },
  { name: 'Stefan M.', city: 'Niš', rating: 4, text: 'Fast delivery, cash on delivery — no issues. The Hawk Mint is incredibly refreshing.', product: 'Hawk Cool Mint', emoji: '🌿' },
  { name: 'Jelena K.', city: 'Kragujevac', rating: 5, text: 'Fair prices, excellent quality. Mango Peach is perfect for summer!', product: 'Tornado Mango Breskva', emoji: '🥭' },
  { name: 'Nikola D.', city: 'Subotica', rating: 5, text: 'Everything is authentic, QR verification works. Finally a reliable seller in Serbia.', product: 'Tornado Peach Ice', emoji: '🍑' },
  { name: 'Milica R.', city: 'Pančevo', rating: 4, text: 'Blueberry Sour at 15€ is an incredible deal. Flavor lasts a very long time.', product: 'Hawk Blueberry Sour', emoji: '🫐' },
];

export const MARQUEE_ITEMS = [
  'Tornado 10000', 'Hawk Pro Max', 'Watermelon Ice', 'Mango Peach',
  'Blueberry Sour', 'Lychee Mint', 'Grape Ice', 'Cool Mint',
  'Passion Fruit', 'Cola Ice',
];
