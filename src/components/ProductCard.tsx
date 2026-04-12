import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product, BADGE_MAP, COLOR_STYLES } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const styles = COLOR_STYLES[product.color];
  const badge = product.badge ? BADGE_MAP[product.badge] : null;

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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -12, scale: 1.018 }}
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

      {/* Visual area */}
      <div className={`h-[195px] relative overflow-hidden flex items-center justify-center ${styles.visual}`}>
        <div className={`absolute w-[110px] h-[110px] rounded-full blur-[30px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.glow}`} />
        <span className="relative z-[1] text-[4.8rem] not-italic block drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-transform duration-400 group-hover:scale-[1.22] group-hover:-translate-y-1">
          {product.emoji}
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Body */}
      <div className="p-5 relative z-[2]">
        <div className={`font-mono text-[0.56rem] font-bold tracking-widest uppercase mb-1 ${styles.flavor}`}>
          {product.cats[0]}
        </div>
        <h3 className="text-base font-bold tracking-tight leading-tight">{product.name}</h3>
        <p className="font-mono text-[0.62rem] text-muted-foreground mt-0.5">
          {product.puffs} · 20mg nic/ml
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="text-xl font-black tracking-tight">
            {product.price}<small className="text-[0.65em] font-semibold opacity-65">€</small>
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); handleAdd(); }}
            className={`font-mono text-[0.58rem] font-bold tracking-wider uppercase px-3 py-2 min-h-[40px] rounded-sm border transition-colors ${
              added
                ? 'text-accent border-accent/40 bg-accent/[0.08]'
                : 'bg-card border-foreground/14 text-foreground hover:bg-foreground/10 hover:border-foreground/22'
            }`}
          >
            {added ? '✓ Dodato!' : '+ Dodaj'}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
