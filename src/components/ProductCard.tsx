import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product, BADGE_MAP, COLOR_STYLES } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { Star, Flame, ShoppingCart } from 'lucide-react';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const styles = COLOR_STYLES[product.color];
  const badge = product.badge ? BADGE_MAP[product.badge] : null;
  const lowStock = product.stock <= 10;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.012 }}
      className={`bg-card border border-border rounded-lg overflow-hidden cursor-pointer relative group transition-shadow duration-300 ${styles.hoverShadow}`}
    >
      {/* Glass glint */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-br from-foreground/[0.06] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge */}
      {badge && (
        <div className={`absolute top-3 right-3 z-[3] font-mono text-[0.52rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${badge.cls} ${product.badge === 'hot' ? 'shadow-[0_0_10px_hsl(var(--glow-violet))]' : ''}`}>
          {badge.txt}
        </div>
      )}

      {/* Low stock FOMO badge */}
      {lowStock && (
        <div className="absolute top-3 left-3 z-[3] flex items-center gap-1 font-mono text-[0.5rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-neon-amber/20 border border-neon-amber/30 text-neon-amber">
          <Flame size={10} />
          Još {product.stock} kom!
        </div>
      )}

      {/* Visual area */}
      <div className={`h-[180px] relative overflow-hidden flex items-center justify-center ${styles.visual}`}>
        <div className={`absolute w-[100px] h-[100px] rounded-full blur-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.glow}`} />
        <span className="relative z-[1] text-[4.2rem] not-italic block drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-[1.15] group-hover:-translate-y-1">
          {product.emoji}
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Body */}
      <div className="p-4 relative z-[2]">
        <div className={`font-mono text-[0.56rem] font-bold tracking-widest uppercase mb-1 ${styles.flavor}`}>
          {product.cats[0]}
        </div>
        <h3 className="text-sm font-bold tracking-tight leading-tight">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-neon-amber text-neon-amber' : 'text-muted-foreground/30'} />
            ))}
          </div>
          <span className="font-mono text-[0.52rem] text-muted-foreground">{product.rating} ({product.reviews})</span>
        </div>

        <p className="font-mono text-[0.58rem] text-muted-foreground mt-1">
          {product.puffs} · 20mg nic/ml
        </p>
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div>
            <span className="text-xl font-black tracking-tight">
              {product.price}<small className="text-[0.65em] font-semibold opacity-65">€</small>
            </span>
            {product.badge === 'sale' && (
              <span className="ml-2 text-xs text-muted-foreground line-through">{Math.round(product.price / 0.9)}€</span>
            )}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); handleAdd(); }}
            className={`flex items-center gap-1.5 font-mono text-[0.56rem] font-bold tracking-wider uppercase px-3 py-2.5 min-h-[40px] rounded-md transition-all ${
              added
                ? 'text-accent border border-accent/40 bg-accent/[0.08]'
                : 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_2px_12px_hsl(var(--glow-violet))] hover:shadow-[0_4px_20px_hsl(var(--glow-violet))] hover:-translate-y-0.5'
            }`}
          >
            {added ? (
              '✓ Dodato!'
            ) : (
              <>
                <ShoppingCart size={12} />
                Kupi
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
