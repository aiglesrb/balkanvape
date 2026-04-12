export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
  puffs: string;
  color: 'violet' | 'cyan' | 'green' | 'pink' | 'amber' | 'red';
  badge: '' | 'hot' | 'new' | 'sale';
  cats: string[];
  stock: number;
  rating: number;
  reviews: number;
}

export const PRODUCTS: Product[] = [
  { id: 'tornado-grape', name: 'Tornado 10000 Grožđe', emoji: '🍇', price: 22, puffs: '≈ 10 000 pušenja', color: 'violet', badge: 'hot', cats: ['vocni', 'ledeni'], stock: 8, rating: 4.9, reviews: 234 },
  { id: 'hawk-lubenica', name: 'Hawk Pro Lubenica Ice', emoji: '🍉', price: 18, puffs: '≈ 8 000 pušenja', color: 'cyan', badge: 'new', cats: ['vocni', 'ledeni'], stock: 23, rating: 4.7, reviews: 89 },
  { id: 'tornado-mango', name: 'Tornado Mango Breskva', emoji: '🥭', price: 22, puffs: '≈ 10 000 pušenja', color: 'green', badge: 'hot', cats: ['tropski', 'vocni'], stock: 5, rating: 4.8, reviews: 312 },
  { id: 'hawk-jagoda', name: 'Hawk Jagoda Kivi', emoji: '🍓', price: 18, puffs: '≈ 8 000 pušenja', color: 'pink', badge: '', cats: ['slatki', 'vocni'], stock: 31, rating: 4.5, reviews: 67 },
  { id: 'tornado-narandza', name: 'Tornado Narandža Citrus', emoji: '🍊', price: 20, puffs: '≈ 10 000 pušenja', color: 'amber', badge: 'sale', cats: ['vocni'], stock: 12, rating: 4.6, reviews: 145 },
  { id: 'hawk-mint', name: 'Hawk Cool Mint', emoji: '🌿', price: 18, puffs: '≈ 8 000 pušenja', color: 'cyan', badge: '', cats: ['mentol'], stock: 19, rating: 4.4, reviews: 98 },
  { id: 'tornado-cola', name: 'Tornado Cola Ice', emoji: '🥤', price: 20, puffs: '≈ 10 000 pušenja', color: 'red', badge: 'new', cats: ['ledeni', 'slatki'], stock: 15, rating: 4.7, reviews: 56 },
  { id: 'hawk-lychee', name: 'Hawk Lychee Mint', emoji: '🍈', price: 18, puffs: '≈ 8 000 pušenja', color: 'green', badge: '', cats: ['tropski', 'mentol'], stock: 27, rating: 4.3, reviews: 42 },
  { id: 'tornado-passion', name: 'Tornado Passion Fruit', emoji: '🌺', price: 22, puffs: '≈ 10 000 pušenja', color: 'pink', badge: '', cats: ['tropski'], stock: 9, rating: 4.6, reviews: 78 },
  { id: 'hawk-blueberry', name: 'Hawk Blueberry Sour', emoji: '🫐', price: 15, puffs: '≈ 8 000 pušenja', color: 'violet', badge: 'sale', cats: ['slatki', 'vocni'], stock: 6, rating: 4.8, reviews: 203 },
  { id: 'tornado-peach', name: 'Tornado Peach Ice', emoji: '🍑', price: 22, puffs: '≈ 10 000 pušenja', color: 'amber', badge: 'hot', cats: ['vocni', 'ledeni'], stock: 3, rating: 4.9, reviews: 189 },
  { id: 'hawk-menthol', name: 'Hawk Double Menthol', emoji: '❄️', price: 15, puffs: '≈ 8 000 pušenja', color: 'cyan', badge: '', cats: ['mentol', 'ledeni'], stock: 22, rating: 4.5, reviews: 134 },
];

export const BADGE_MAP: Record<string, { cls: string; txt: string }> = {
  hot: { cls: 'bg-primary text-primary-foreground', txt: '🔥 Hot' },
  new: { cls: 'bg-accent text-accent-foreground', txt: '✨ Novo' },
  sale: { cls: 'bg-destructive text-destructive-foreground', txt: '-10%' },
};

export const COLOR_STYLES: Record<string, { visual: string; glow: string; flavor: string; hoverShadow: string }> = {
  violet: {
    visual: 'bg-gradient-to-b from-[#250868] to-[#0c001e]',
    glow: 'bg-primary/35',
    flavor: 'text-primary',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(155,92,255,0.35)] hover:border-primary/30',
  },
  cyan: {
    visual: 'bg-gradient-to-b from-[#04284a] to-[#010c18]',
    glow: 'bg-secondary/30',
    flavor: 'text-secondary',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(0,229,255,0.3)] hover:border-secondary/30',
  },
  green: {
    visual: 'bg-gradient-to-b from-[#053820] to-[#010e06]',
    glow: 'bg-accent/30',
    flavor: 'text-accent',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(0,255,136,0.3)] hover:border-accent/30',
  },
  pink: {
    visual: 'bg-gradient-to-b from-[#380628] to-[#0e0008]',
    glow: 'bg-[#ff50a0]/30',
    flavor: 'text-[#ff50a0]',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(255,80,160,0.3)] hover:border-[#ff50a0]/30',
  },
  amber: {
    visual: 'bg-gradient-to-b from-[#381806] to-[#0e0400]',
    glow: 'bg-neon-amber/30',
    flavor: 'text-neon-amber',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(255,176,32,0.3)] hover:border-neon-amber/30',
  },
  red: {
    visual: 'bg-gradient-to-b from-[#380408] to-[#0e0000]',
    glow: 'bg-neon-red/30',
    flavor: 'text-neon-red',
    hoverShadow: 'hover:shadow-[0_22px_50px_rgba(255,68,102,0.3)] hover:border-neon-red/30',
  },
};

export const CATEGORIES = [
  { id: 'all', label: 'Sve', emoji: '' },
  { id: 'vocni', label: 'Voćni', emoji: '🍇' },
  { id: 'mentol', label: 'Mentol', emoji: '🌿' },
  { id: 'tropski', label: 'Tropski', emoji: '🥭' },
  { id: 'ledeni', label: 'Ledeni', emoji: '❄️' },
  { id: 'slatki', label: 'Slatki', emoji: '🍬' },
];

export const MARQUEE_ITEMS = [
  'Tornado 10000', 'Hawk Pro Max', 'Watermelon Ice', 'Mango Peach',
  'Blueberry Sour', 'Lychee Mint', 'Grape Ice', 'Cool Mint',
  'Passion Fruit', 'Cola Ice',
];

export const CUSTOMER_REVIEWS = [
  { name: 'Marko P.', city: 'Beograd', rating: 5, text: 'Najbolji ukus koji sam probao! Tornado Grožđe je fenomenalan. Dostava stigla za 20h.', product: 'Tornado 10000 Grožđe', emoji: '🍇' },
  { name: 'Ana S.', city: 'Novi Sad', rating: 5, text: 'Naručujem već treći put. Uvek originalni proizvodi, pakovanje diskretno. Preporuka!', product: 'Hawk Pro Lubenica Ice', emoji: '🍉' },
  { name: 'Stefan M.', city: 'Niš', rating: 4, text: 'Brza dostava, plaćanje pouzećem — bez problema. Hawk Mint je osvežavajuć.', product: 'Hawk Cool Mint', emoji: '🌿' },
  { name: 'Jelena K.', city: 'Kragujevac', rating: 5, text: 'Cene su fer, kvalitet odličan. Mango Breskva je savršen za leto!', product: 'Tornado Mango Breskva', emoji: '🥭' },
  { name: 'Nikola D.', city: 'Subotica', rating: 5, text: 'Sve je originalno, QR verifikacija radi. Konačno pouzdan prodavac u Srbiji.', product: 'Tornado Peach Ice', emoji: '🍑' },
  { name: 'Milica R.', city: 'Pančevo', rating: 4, text: 'Blueberry Sour po ceni od 15€ je neverovatna ponuda. Ukus traje dugo.', product: 'Hawk Blueberry Sour', emoji: '🫐' },
];
