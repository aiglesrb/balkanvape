import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, MARQUEE_ITEMS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

function Hero() {
  return (
    <section className="min-h-[calc(100vh-66px)] flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 z-0 animate-atm-drift" style={{
        background: 'radial-gradient(ellipse 70% 55% at 15% 25%, hsl(264 100% 67% / 0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 85% 75%, hsl(186 100% 50% / 0.14) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 50% 50%, hsl(152 100% 50% / 0.06) 0%, transparent 65%)',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.045]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 80%)',
      }} />

      {/* Vapor blobs */}
      {[
        { w: 260, bg: 'hsl(264 100% 67% / 0.13)', top: '28%', left: '13%', dur: '11s' },
        { w: 220, bg: 'hsl(186 100% 50% / 0.1)', top: '42%', right: '11%', dur: '15s', delay: '-6s' },
        { w: 180, bg: 'hsl(152 100% 50% / 0.08)', top: '50%', left: '46%', dur: '17s', delay: '-9s' },
      ].map((b, i) => (
        <div key={i} className="absolute z-[1] rounded-full blur-[45px] opacity-0" style={{
          width: b.w, height: b.w, background: b.bg, top: b.top, left: b.left, right: (b as any).right,
          animation: `vapor-rise ${b.dur} ease-in-out infinite`,
          animationDelay: b.delay || '0s',
        }} />
      ))}

      {/* Content */}
      <div className="relative z-[2] max-w-[860px]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
          <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full bg-accent/[0.08] border border-accent/22">
            🇷🇸 &nbsp; Premium · Srbija
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 }}
          className="text-[clamp(2.8rem,8.5vw,7.2rem)] font-black leading-[0.92] tracking-[-0.055em]"
        >
          PREMIUM VAPE
          <span className="block mt-1 text-gradient-brand">ISKUSTVO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.24 }}
          className="mt-5 font-mono text-sm tracking-wider text-muted-foreground"
        >
          Cene već od <strong className="text-foreground">15€</strong> &nbsp;·&nbsp;
          Plaćanje pouzećem &nbsp;·&nbsp;
          Dostava 24h
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.36 }}
          className="flex gap-3 flex-wrap justify-center mt-8"
        >
          <Link to="/shop" className="inline-flex items-center justify-center gap-2 font-display font-bold text-[0.95rem] px-7 py-3.5 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground glow-violet hover:glow-violet-lg hover:-translate-y-0.5 transition-all min-h-[50px]">
            <ShoppingBag size={15} strokeWidth={2.5} />
            Istraži prodavnicu
          </Link>
          <Link to="/profile" className="inline-flex items-center justify-center gap-2 font-display font-bold text-[0.95rem] px-7 py-3.5 rounded-lg bg-transparent border border-foreground/14 text-foreground hover:border-secondary/50 hover:text-secondary hover:bg-secondary/[0.05] transition-all min-h-[50px]">
            Prijavi se →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.48 }}
          className="flex flex-wrap bg-foreground/[0.03] border border-border rounded-xl overflow-hidden mt-14"
        >
          {[
            { num: '50+', label: 'Ukusa' },
            { num: '12k+', label: 'Kupaca' },
            { num: '24h', label: 'Dostava' },
            { num: '100%', label: 'Original' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[110px] py-5 px-5 text-center border-r border-border last:border-r-0 max-sm:min-w-[50%] max-sm:[&:nth-child(2)]:border-r-0 max-sm:[&:nth-child(n+3)]:border-t max-sm:[&:nth-child(n+3)]:border-border">
              <div className="text-[1.9rem] font-black tracking-tight leading-none text-gradient-stat">{stat.num}</div>
              <div className="font-mono text-[0.56rem] text-muted-foreground tracking-widest uppercase mt-1.5">{stat.label}</div>
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

export default function HomePage() {
  const featured = [
    ...PRODUCTS.filter(p => p.badge === 'hot').slice(0, 3),
    ...PRODUCTS.filter(p => p.badge !== 'hot').slice(0, 3),
  ].slice(0, 6);

  return (
    <main className="pt-[66px]">
      <Hero />
      <Marquee />

      {/* Featured */}
      <section className="py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="font-mono text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary block mb-3">// Istaknuti Proizvodi</span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">Bestsellers ove nedelje</h2>
          <p className="text-muted-foreground text-[0.95rem] mt-2">Najpopularniji modeli i ukusi</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1240px] mx-auto">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-flex items-center gap-2 font-display font-bold text-[0.95rem] px-7 py-3.5 rounded-lg bg-transparent border border-foreground/14 text-foreground hover:border-secondary/50 hover:text-secondary hover:bg-secondary/[0.05] transition-all">
            Prikaži sve proizvode →
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, transparent, hsl(264 100% 67% / 0.03), transparent)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="font-mono text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary block mb-3">// Zašto mi?</span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">Razlozi za poverenje</h2>
          <p className="text-muted-foreground text-[0.95rem] mt-2">Ono što nas izdvaja</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1050px] mx-auto">
          {[
            { emoji: '⚡', title: 'Brza Dostava', desc: 'Isporuka širom Srbije u roku od 24/48h. Pratite paket u realnom vremenu — od magacina do vaših vrata.', color: 'primary' },
            { emoji: '🏅', title: 'Originalni Proizvodi', desc: '100% sertifikovani brendovi. Tornado, Hawk series — direktno od ovlašćenih distributera sa QR verifikacijom.', color: 'accent' },
            { emoji: '🔒', title: 'Plaćanje Pouzećem', desc: 'Sigurna kupovina bez rizika — platite gotovinom kuriru kada paket stigne na vašu adresu. Nema unapred.', color: 'secondary' },
          ].map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`bg-card border border-border rounded-xl p-8 text-center relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_14px_40px_hsl(var(--${card.color})/0.2)] hover:border-${card.color}/30`}
            >
              <div className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[1.9rem] mx-auto mb-5 bg-${card.color}/10 border border-${card.color}/20`}>
                {card.emoji}
              </div>
              <h3 className={`text-base font-bold mb-2 text-${card.color}`}>{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
