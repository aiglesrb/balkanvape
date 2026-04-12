import { motion } from 'framer-motion';
import { ArrowRight, Zap, Droplets, Battery, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div {...fade} transition={{ duration: 0.7 }} className="max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Premium Vape · Serbia · 12k+ customers
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          Vape.
          <br />
          <span className="text-muted-foreground">Reinvented.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
          Premium flavors, authentic products, delivered to your door in 24 hours. Starting from 15€.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Shop now
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-secondary text-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-border transition-colors"
          >
            Explore collection
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Droplets, title: '50+ Flavors', desc: 'From fruity to menthol, every taste perfected.' },
    { icon: Battery, title: 'Long lasting', desc: 'Up to 10,000 puffs per device.' },
    { icon: Zap, title: 'Smooth draw', desc: 'Engineered for the perfect pull, every time.' },
    { icon: Truck, title: '24h Delivery', desc: 'Fast, discreet shipping across Serbia.' },
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fade} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Designed for perfection.</h2>
          <p className="text-muted-foreground text-base">Every detail matters.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ delay: i * 0.08 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center">
                <f.icon size={20} className="text-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '50+', label: 'Flavors' },
    { value: '12k+', label: 'Customers' },
    { value: '24h', label: 'Delivery' },
    { value: '4.8', label: 'Rating', icon: true },
  ];

  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={i} {...fade} transition={{ delay: i * 0.08 }} className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight flex items-center justify-center gap-1">
              {s.value}
              {s.icon && <Star size={20} className="fill-foreground text-foreground" />}
            </div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => p.badge === 'hot').slice(0, 3);
  if (featured.length < 3) featured.push(...PRODUCTS.filter(p => !featured.includes(p)).slice(0, 3 - featured.length));

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fade} className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Bestsellers.</h2>
            <p className="text-muted-foreground text-sm">The most popular picks this week.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            View all products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: '🔒', label: 'Secure payment', sub: 'SSL encrypted' },
    { icon: '📦', label: 'Discreet packaging', sub: 'Plain box, no labels' },
    { icon: '✅', label: 'EU compliant', sub: 'Certified products' },
    { icon: '💬', label: '24/7 Support', sub: 'Viber · Instagram' },
    { icon: '🔄', label: 'Easy returns', sub: 'Within 14 days' },
  ];

  return (
    <section className="py-14 px-6 border-t border-border">
      <div className="flex flex-wrap justify-center gap-8 md:gap-14 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div key={i} {...fade} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 shrink-0">
            <span className="text-xl">{item.icon}</span>
            <div>
              <div className="text-xs font-semibold">{item.label}</div>
              <div className="text-[11px] text-muted-foreground">{item.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="py-16 px-6">
      <motion.div {...fade} className="max-w-3xl mx-auto bg-secondary rounded-2xl p-10 md:p-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Buy 2, get 10% off.</h2>
        <p className="text-muted-foreground text-sm mb-6">Plus free shipping on orders over 30€.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop now <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="pt-[calc(3.5rem+2rem)]">
      <Hero />
      <Stats />
      <Features />
      <FeaturedProducts />
      <PromoBanner />
      <ReviewsSection />
      <TrustStrip />
      <Footer />
    </main>
  );
}
