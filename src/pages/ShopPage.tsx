import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [maxPrice, setMaxPrice] = useState(25);

  const filtered = PRODUCTS.filter(p => {
    const catOk = activeCat === 'all' || p.cats.includes(activeCat);
    return catOk && p.price <= maxPrice;
  });

  return (
    <main className="pt-[calc(3.5rem+2rem)]">
      <div className="px-6 py-14 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Shop</h1>
          <p className="text-muted-foreground text-sm mb-8">All models and flavors in one place.</p>
        </motion.div>

        {/* Promo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 p-5 bg-secondary rounded-2xl flex flex-wrap items-center justify-between gap-3"
        >
          <div>
            <div className="text-sm font-semibold mb-0.5">Buy 2 or more — get 10% off!</div>
            <div className="text-xs text-muted-foreground">+ Free shipping on orders over 30€</div>
          </div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Auto-applied</span>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 flex-wrap mb-8"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                activeCat === cat.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
            >
              {cat.label}
            </button>
          ))}

          <div className="flex items-center gap-2 ml-auto text-xs text-muted-foreground">
            <span>Max:</span>
            <input
              type="range" min={15} max={25} value={maxPrice} step={1}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-20 accent-foreground cursor-pointer"
            />
            <span className="font-semibold text-foreground">{maxPrice}€</span>
          </div>
        </motion.div>

        <p className="text-xs text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-semibold">No products match your filters</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
