import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartToast() {
  const { lastAdded, clearLastAdded } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (lastAdded) {
      const timer = setTimeout(clearLastAdded, 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAdded, clearLastAdded]);

  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[9000] w-[min(360px,90vw)]">
      <AnimatePresence>
        {lastAdded && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            onClick={() => { navigate('/checkout'); clearLastAdded(); }}
            className="flex items-center gap-3 bg-background/96 backdrop-blur-lg border border-foreground/12 rounded-lg p-3.5 w-full shadow-[0_8px_28px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden"
          >
            <span className="text-[1.75rem] shrink-0">{lastAdded.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold">{lastAdded.name}</div>
              <div className="font-mono text-[0.58rem] text-muted-foreground mt-0.5">
                Dodato u korpu · <span className="text-accent">Idi na plaćanje →</span>
              </div>
            </div>
            <div className="text-[0.95rem] font-black text-primary whitespace-nowrap">{lastAdded.price}€</div>
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 3, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
