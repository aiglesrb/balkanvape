import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, User, CreditCard, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { path: '/', label: 'Početna', icon: Home },
  { path: '/shop', label: 'Prodavnica', icon: ShoppingBag },
  { path: '/profile', label: 'Profil', icon: User },
  { path: '/checkout', label: 'Plaćanje', icon: CreditCard },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { totalQty } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Nav sits below trust banner */}
      <nav className="fixed top-[28px] left-0 right-0 z-[500] h-[62px] flex items-center px-4 md:px-8 gap-4 bg-background/85 backdrop-blur-xl border-b border-border">
        <Link to="/" className="text-lg font-black tracking-wide shrink-0 select-none">
          VAPE <span className="text-primary">BALKAN</span>
        </Link>

        <div className="hidden md:flex items-center gap-1.5 shrink-0 font-mono text-[0.58rem] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full bg-accent/[0.07] border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot shrink-0" />
          Brza dostava — 24h
        </div>

        <ul className="hidden md:flex gap-1 flex-1 justify-center list-none">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-widest uppercase px-3 py-2 rounded-sm transition-colors whitespace-nowrap relative ${
                    active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]'
                  }`}
                >
                  <item.icon size={13} className={active ? 'opacity-100' : 'opacity-60'} />
                  {item.label}
                  {active && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-[-1px] left-[12%] right-[12%] h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
          <Link
            to="/checkout"
            className="relative w-[38px] h-[38px] rounded-sm bg-card border border-border flex items-center justify-center hover:border-foreground/20 hover:bg-foreground/[0.06] transition-colors"
            aria-label="Korpa"
          >
            <ShoppingBag size={16} className="opacity-65" />
            <motion.span
              key={totalQty}
              initial={{ scale: 1.45 }}
              animate={{ scale: 1 }}
              className="absolute -top-1.5 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-primary text-primary-foreground font-mono text-[0.5rem] font-bold flex items-center justify-center shadow-[0_0_10px_hsl(var(--glow-violet))]"
            >
              {totalQty}
            </motion.span>
          </Link>

          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-[38px] h-[38px] bg-card border border-border rounded-sm px-[9px]"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Meni"
          >
            {drawerOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.nav
            initial={{ y: '-110%' }}
            animate={{ y: 0 }}
            exit={{ y: '-110%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[90px] left-0 right-0 z-[490] bg-background/97 backdrop-blur-xl border-b border-border"
          >
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-3 w-full px-6 py-4 font-mono text-[0.7rem] font-bold tracking-widest uppercase border-b border-border transition-colors ${
                  pathname === item.path ? 'text-primary bg-primary/[0.06]' : 'text-muted-foreground hover:text-primary hover:bg-primary/[0.06]'
                }`}
              >
                <item.icon size={15} />
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
