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
    <main className="pt-[90px]">
      <div className="px-6 py-10 pb-20">
        {/* Promo banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20 rounded-xl flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <div>
              <div className="text-sm font-bold">Kupi 2 ili više — dobij 10% popust!</div>
              <div className="font-mono text-[0.56rem] text-muted-foreground">+ Besplatna dostava za porudžbine od 30€+</div>
            </div>
          </div>
          <div className="font-mono text-[0.58rem] font-bold text-accent tracking-wider">AUTOMATSKI POPUST</div>
        </motion.div>

        <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight">Prodavnica</h1>
          <p className="text-muted-foreground text-sm mt-1">Svi modeli i ukusi — Tornado 10000, Hawk series i još mnogo</p>
        </motion.header>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex items-center gap-4 flex-wrap p-4 mb-6 bg-card border border-border rounded-lg"
        >
          <span className="font-mono text-[0.57rem] font-bold tracking-widest uppercase text-muted-foreground shrink-0">Filter:</span>
          <div className="flex gap-2 flex-wrap flex-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`font-mono text-[0.58rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md border transition-all ${
                  activeCat === cat.id
                    ? 'bg-primary/12 border-primary/30 text-primary'
                    : 'border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2.5 font-mono text-[0.6rem] text-muted-foreground shrink-0">
            <span>Max:</span>
            <input
              type="range" min={15} max={25} value={maxPrice} step={1}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-[90px] accent-primary cursor-pointer"
            />
            <strong className="text-primary font-bold">{maxPrice}€</strong>
          </div>
        </motion.div>

        <p className="font-mono text-[0.62rem] text-muted-foreground tracking-wider mb-5">
          Prikazano: <strong className="text-accent">{filtered.length}</strong> proizvoda
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1240px] mx-auto">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-bold">Nema proizvoda za zadati filter</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
