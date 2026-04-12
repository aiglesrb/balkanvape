import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, MapPin, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const CITIES = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Pančevo', 'Čačak', 'Novi Pazar', 'Kraljevo', 'Smederevo', 'Leskovac', 'Valjevo', 'Vranje', 'Šabac', 'Drugi grad'];

export default function CheckoutPage() {
  const { cart, changeQty, removeFromCart, totalPrice, clearCart } = useCart();
  const [payment, setPayment] = useState('pouzecem');
  const items = Object.values(cart);
  const shipping = totalPrice >= 30 ? 0 : 3;
  const total = totalPrice + shipping;

  const handleOrder = () => {
    toast.success('✅ Hvala! Porudžbina je primljena. Kontaktiraćemo vas uskoro! 🚚');
    clearCart();
  };

  return (
    <main className="pt-[66px]">
      <div className="px-6 py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_410px] gap-8 max-w-[1100px] mx-auto items-start">
          {/* Left: Cart */}
          <div>
            <h2 className="text-xl font-extrabold tracking-tight mb-5">Vaša korpa</h2>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl opacity-35 mb-4">🛒</div>
                <div className="font-bold text-muted-foreground mb-2">Korpa je prazna</div>
                <Link to="/shop" className="font-mono text-[0.62rem] text-primary underline">Idi u prodavnicu →</Link>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3 mb-5">
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 bg-card border border-border rounded-lg p-4"
                    >
                      <span className="text-[2.2rem] w-11 text-center shrink-0">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm tracking-tight">{item.name}</div>
                        <div className="font-mono text-[0.58rem] text-muted-foreground mt-0.5">{item.puffs} · 20mg nic/ml</div>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => changeQty(item.id, -1)} className="w-[26px] h-[26px] rounded-md bg-foreground/[0.07] border border-foreground/14 text-foreground font-mono text-sm flex items-center justify-center hover:bg-foreground/[0.13] transition-colors">−</button>
                          <span className="font-mono text-xs min-w-[20px] text-center">{item.qty}</span>
                          <button onClick={() => changeQty(item.id, 1)} className="w-[26px] h-[26px] rounded-md bg-foreground/[0.07] border border-foreground/14 text-foreground font-mono text-sm flex items-center justify-center hover:bg-foreground/[0.13] transition-colors">+</button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-base font-black tracking-tight">{item.price * item.qty}€</span>
                        <button onClick={() => removeFromCart(item.id)} className="w-[30px] h-[30px] rounded-sm bg-destructive/10 border border-destructive/20 text-destructive/80 hover:bg-destructive/25 hover:text-destructive flex items-center justify-center transition-colors text-sm">🗑</button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {shipping === 0 && (
                  <div className="flex items-center gap-2 bg-accent/[0.08] border border-accent/20 rounded-lg p-3 mb-5 font-mono text-[0.62rem] font-bold text-accent tracking-wider">
                    🚚 &nbsp; Besplatna dostava uključena za ovu porudžbinu!
                  </div>
                )}

                <div className="bg-card border border-border rounded-lg p-5">
                  {[
                    { label: 'Međuzbir', value: `${totalPrice}€` },
                    { label: 'Dostava', value: shipping === 0 ? 'BESPLATNO' : `${shipping}€`, free: shipping === 0 },
                  ].map(line => (
                    <div key={line.label} className="flex justify-between items-center py-2 border-b border-border text-sm">
                      <span>{line.label}</span>
                      <span className={line.free ? 'text-accent font-mono text-xs font-bold' : ''}>{line.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 mt-1 text-lg font-extrabold">
                    <span>Ukupno</span>
                    <span className="text-primary">{total}€</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-border rounded-xl p-6 sticky top-[calc(66px+1rem)]">
            <h2 className="text-xl font-extrabold tracking-tight mb-5">Podaci za dostavu</h2>

            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <FormInput icon={<User size={14} />} label="Ime" placeholder="Marko" />
              <FormInput icon={<User size={14} />} label="Prezime" placeholder="Petrović" />
            </div>

            <div className="mb-4 mt-4">
              <label className="block font-mono text-[0.58rem] tracking-widest uppercase text-muted-foreground mb-2">Grad</label>
              <select className="w-full bg-card border border-border text-foreground font-display text-sm py-3.5 px-4 rounded-lg outline-none cursor-pointer appearance-none focus:border-primary/55 transition-colors">
                <option value="">— Izaberite grad —</option>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <FormInput icon={<MapPin size={14} />} label="Adresa" placeholder="Ulica i broj, sprat/stan..." />
            <FormInput icon={<Phone size={14} />} label="Broj telefona" type="tel" placeholder="+381 60 000 0000" />

            <label className="block font-mono text-[0.58rem] tracking-widest uppercase text-muted-foreground mb-3">Način plaćanja</label>
            <div className="flex flex-col gap-2.5 mb-5">
              {[
                { id: 'pouzecem', title: 'Plaćanje pouzećem', sub: 'Platite gotovinom pri preuzimanju', icon: '💵' },
                { id: 'kartica', title: 'Kartica / Online', sub: 'Visa, Mastercard, online plaćanje €', icon: '💳' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setPayment(opt.id)}
                  className={`flex items-center gap-4 p-3.5 rounded-lg border transition-colors text-left ${
                    payment === opt.id ? 'border-accent/35 bg-accent/[0.07]' : 'border-border hover:border-foreground/20 hover:bg-foreground/[0.03]'
                  }`}
                >
                  <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    payment === opt.id ? 'border-accent bg-accent' : 'border-foreground/14'
                  }`}>
                    {payment === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-background" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold">{opt.title}</div>
                    <div className="font-mono text-[0.58rem] text-muted-foreground mt-0.5">{opt.sub}</div>
                  </div>
                  <span className="text-xl shrink-0">{opt.icon}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleOrder}
              disabled={items.length === 0}
              className="w-full py-3.5 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground font-bold glow-violet hover:glow-violet-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Potvrdi porudžbinu →
            </button>
            <p className="font-mono text-[0.58rem] text-muted-foreground text-center mt-3 leading-relaxed">
              🔒 Podaci su zaštićeni · Dostava 24–48h · Možete otkazati pre isporuke
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function FormInput({ icon, label, type = 'text', placeholder }: {
  icon: React.ReactNode; label: string; type?: string; placeholder: string;
}) {
  return (
    <div className="mb-4">
      <label className="block font-mono text-[0.58rem] tracking-widest uppercase text-muted-foreground mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.38] pointer-events-none">{icon}</span>
        <input type={type} placeholder={placeholder} className="w-full bg-card border border-border text-foreground font-display text-sm py-3.5 pl-11 pr-4 rounded-lg outline-none transition-all focus:border-primary/55 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.12)] placeholder:text-muted-foreground placeholder:text-xs" />
      </div>
    </div>
  );
}
