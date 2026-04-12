import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/lib/products';

export default function ReviewsSection() {
  return (
    <section className="py-16 px-6">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <span className="font-mono text-[0.62rem] font-bold tracking-[0.2em] uppercase text-accent block mb-3">// Recenzije kupaca</span>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">Šta kažu naši kupci</h2>
        <p className="text-muted-foreground text-[0.95rem] mt-2">12.000+ zadovoljnih kupaca širom Srbije</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
        {CUSTOMER_REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-card border border-border rounded-xl p-5 relative group hover:border-primary/20 transition-colors"
          >
            <Quote size={20} className="absolute top-4 right-4 text-primary/20" />

            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                {review.emoji}
              </div>
              <div>
                <div className="text-sm font-bold">{review.name}</div>
                <div className="font-mono text-[0.52rem] text-muted-foreground">{review.city} · Kupac</div>
              </div>
            </div>

            <div className="flex items-center gap-0.5 mb-2.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={12} className={j < review.rating ? 'fill-neon-amber text-neon-amber' : 'text-muted-foreground/30'} />
              ))}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">"{review.text}"</p>

            <div className="mt-3 font-mono text-[0.52rem] text-primary/60 tracking-wider">
              za {review.product}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
