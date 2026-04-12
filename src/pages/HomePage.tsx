import { motion } from 'framer-motion';
import { ShoppingBag, Flame, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, MARQUEE_ITEMS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 px-4"
    >
      <div className="flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2">
        <Percent size={14} className="text-primary" />
        <span className="font-mono text-[0.62rem] font-bold tracking-wider text-primary">2 kupljena = -10%</span>
      </div>
      <div className="flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2">
        <ShoppingBag size={14} className="text-accent" />
        <span className="font-mono text-[0.62rem] font-bold tracking-wider text-accent">Besplatna dostava 30€+</span>
      </div>
      <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/25 rounded-full px-4 py-2">
        <Flame size={14} className="text-destructive" />
        <span className="font-mono text-[0.62rem] font-bold tracking-wider text-destructive">Ograničene zalihe!</span>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-center px-6 py-12 relative overflow-hidden">
      {/* Atmosphere - simplified for performance */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 70% 55% at 15% 25%, hsl(264 100% 67% / 0.15) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 85% 75%, hsl(186 100% 50% / 0.1) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 50% 50%, hsl(152 100% 50% / 0.05) 0%, transparent 65%)',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 80%)',
      }} />

      {/* Content */}
      <div className="relative z-[2] max-w-[860px]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6">
          <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full bg-accent/[0.08] border border-accent/22">
            🇷🇸 &nbsp; Premium · Srbija · 12k+ kupaca
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.8rem,8.5vw,7.2rem)] font-black leading-[0.92] tracking-[-0.055em]"
        >
          PREMIUM VAPE
          <span className="block mt-1 text-gradient-brand">ISKUSTVO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 font-mono text-sm tracking-wider text-muted-foreground"
        >
          Cene već od <strong className="text-foreground">15€</strong> &nbsp;·&nbsp;
          Plaćanje pouzećem &nbsp;·&nbsp;
          Dostava 24h &nbsp;·&nbsp;
          <strong className="text-accent">100% original</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-3 flex-wrap justify-center mt-8"
        >
          <Link to="/shop" className="inline-flex items-center justify-center gap-2 font-display font-bold text-base px-8 py-4 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground glow-violet hover:glow-violet-lg hover:-translate-y-0.5 transition-all min-h-[54px]">
            <ShoppingBag size={18} strokeWidth={2.5} />
            🔥 Kupi odmah
          </Link>
          <Link to="/shop" className="inline-flex items-center justify-center gap-2 font-display font-bold text-base px-8 py-4 rounded-lg bg-transparent border border-foreground/14 text-foreground hover:border-secondary/50 hover:text-secondary hover:bg-secondary/[0.05] transition-all min-h-[54px]">
            Pogledaj ponudu →
          </Link>
        </motion.div>

        <PromoBanner />

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap bg-foreground/[0.03] border border-border rounded-xl overflow-hidden mt-10"
        >
          {[
            { num: '50+', label: 'Ukusa' },
            { num: '12k+', label: 'Kupaca' },
            { num: '24h', label: 'Dostava' },
            { num: '4.8★', label: 'Ocena' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[110px] py-4 px-4 text-center border-r border-border last:border-r-0 max-sm:min-w-[50%] max-sm:[&:nth-child(2)]:border-r-0 max-sm:[&:nth-child(n+3)]:border-t max-sm:[&:nth-child(n+3)]:border-border">
              <div className="text-[1.7rem] font-black tracking-tight leading-none text-gradient-stat">{stat.num}</div>
              <div className="font-mono text-[0.54rem] text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-primary/12 bg-primary/[0.04] py-3">
      <div className="inline-flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i}>
            <span className="font-mono text-[0.64rem] tracking-[0.16em] uppercase px-7 text-primary opacity-65">{item}</span>
            <span className="text-accent opacity-35 text-[0.4rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 px-6"
    >
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-[900px] mx-auto">
        {[
          { icon: '🔒', label: 'Sigurno plaćanje', sub: 'SSL zaštita' },
          { icon: '📦', label: 'Diskretna dostava', sub: 'Neupadljivo pakovanje' },
          { icon: '✅', label: 'EU usklađenost', sub: 'Sertifikovani proizvodi' },
          { icon: '💬', label: 'Podrška 24/7', sub: 'Viber / Instagram' },
          { icon: '🔄', label: 'Lak povrat', sub: 'Do 14 dana' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="text-xs font-bold">{item.label}</div>
              <div className="font-mono text-[0.52rem] text-muted-foreground">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const featured = [
    ...PRODUCTS.filter(p => p.badge === 'hot').slice(0, 3),
    ...PRODUCTS.filter(p => p.badge !== 'hot').slice(0, 3),
  ].slice(0, 6);

  return (
    <main className="pt-[90px]">
      <Hero />
      <Marquee />

      {/* Trust strip */}
      <TrustStrip />

      {/* Featured */}
      <section className="py-12 px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="font-mono text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary block mb-3">// Istaknuti Proizvodi</span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">Bestsellers ove nedelje</h2>
          <p className="text-muted-foreground text-[0.95rem] mt-2">Najpopularniji modeli i ukusi · <span className="text-accent font-bold">💨 Populerno danas</span></p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1240px] mx-auto">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-flex items-center gap-2 font-display font-bold text-base px-8 py-4 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground glow-violet hover:glow-violet-lg hover:-translate-y-0.5 transition-all">
            <ShoppingBag size={16} />
            Pogledaj sve proizvode →
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Why us - improved */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(180deg, transparent, hsl(264 100% 67% / 0.03), transparent)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="font-mono text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary block mb-3">// Zašto VAPE BALKAN?</span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">Razlozi za poverenje</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {[
            { emoji: '🚚', title: 'Dostava 24-48h', desc: 'Isporuka širom Srbije. Pratite paket u realnom vremenu.', color: 'primary', stat: '98% na vreme' },
            { emoji: '🔒', title: 'Plaćanje pouzećem', desc: 'Platite kuriru gotovinom. Zero rizik za vas.', color: 'accent', stat: 'Bez unapred' },
            { emoji: '💨', title: 'Testirani proizvodi', desc: 'QR verifikacija originalnosti. Sertifikovani brendovi.', color: 'secondary', stat: '100% original' },
            { emoji: '📦', title: 'Diskretno pakovanje', desc: 'Neupadljiv paket bez oznaka. Vaša privatnost je zaštićena.', color: 'primary', stat: 'Privatno' },
          ].map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-sm font-bold mb-1.5">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
              <div className="font-mono text-[0.56rem] font-bold text-accent tracking-wider uppercase">✓ {card.stat}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
