import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, User, Gift, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { PRODUCTS } from '@/lib/products';
import { toast } from 'sonner';

const CITIES = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Pančevo', 'Čačak', 'Novi Pazar', 'Kraljevo', 'Smederevo', 'Leskovac', 'Other'];

export default function CheckoutPage() {
  const { cart, changeQty, removeFromCart, totalPrice, clearCart, addToCart, totalQty } = useCart();
  const [payment, setPayment] = useState('cod');
  const items = Object.values(cart);
  const shipping = totalPrice >= 30 ? 0 : 3;
  const hasDiscount = totalQty >= 2;
  const discount = hasDiscount ? Math.round(totalPrice * 0.1) : 0;
  const total = totalPrice - discount + shipping;
  const missingForFreeShip = totalPrice < 30 ? 30 - totalPrice : 0;

  const cartIds = new Set(Object.keys(cart));
  const upsellProducts = PRODUCTS.filter(p => !cartIds.has(p.id)).slice(0, 3);

  const handleOrder = () => {
    toast.success('Order confirmed! We\'ll contact you shortly. 🚚');
    clearCart();
  };

  return (
    <main className="pt-[calc(3.5rem+2rem)]">
      <div className="px-6 py-14 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Cart */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-6">Your cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4 opacity-30">🛒</div>
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                  <ShoppingBag size={16} />
                  Go to shop
                </Link>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3 mb-6">
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4"
                    >
                      <span className="text-3xl w-12 text-center shrink-0">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{item.puffs}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => changeQty(item.id, -1)} className="w-7 h-7 rounded-full bg-secondary text-foreground text-sm flex items-center justify-center hover:bg-border transition-colors">−</button>
                          <span className="text-xs font-medium min-w-[20px] text-center">{item.qty}</span>
                          <button onClick={() => changeQty(item.id, 1)} className="w-7 h-7 rounded-full bg-secondary text-foreground text-sm flex items-center justify-center hover:bg-border transition-colors">+</button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-base font-bold">{item.price * item.qty}€</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-[11px] text-muted-foreground hover:text-destructive transition-colors">Remove</button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Upsell */}
                {upsellProducts.length > 0 && (
                  <div className="mb-6 p-5 bg-secondary rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Gift size={14} className="text-muted-foreground" />
                      <span className="text-xs font-semibold">Add another flavor — save 10%</span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {upsellProducts.map(p => (
                        <button key={p.id} onClick={() => addToCart(p)} className="flex items-center gap-2 shrink-0 bg-background border border-border rounded-xl px-3 py-2 hover:border-foreground/20 transition-colors">
                          <span className="text-lg">{p.emoji}</span>
                          <div className="text-left">
                            <div className="text-[11px] font-semibold">{p.name}</div>
                            <div className="text-[10px] text-muted-foreground">{p.price}€</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Free shipping bar */}
                {missingForFreeShip > 0 && (
                  <div className="mb-6 p-4 bg-secondary rounded-2xl">
                    <div className="text-xs font-medium mb-2">🚚 {missingForFreeShip}€ more for free shipping</div>
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-foreground rounded-full transition-all" style={{ width: `${Math.min(100, (totalPrice / 30) * 100)}%` }} />
                    </div>
                  </div>
                )}

                {shipping === 0 && (
                  <div className="flex items-center gap-2 bg-accent/5 border border-accent/15 rounded-2xl p-4 mb-6 text-xs font-medium text-accent">
                    🚚 Free shipping included!
                  </div>
                )}

                {/* Summary */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex justify-between py-2 border-b border-border text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{totalPrice}€</span>
                  </div>
                  {hasDiscount && (
                    <div className="flex justify-between py-2 border-b border-border text-sm">
                      <span className="text-muted-foreground">Discount (2+ items)</span>
                      <span className="text-accent font-medium">-{discount}€</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-border text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? 'text-accent font-medium' : ''}>{shipping === 0 ? 'Free' : `${shipping}€`}</span>
                  </div>
                  <div className="flex justify-between pt-3 text-lg font-bold">
                    <span>Total</span>
                    <span>{total}€</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-[calc(3.5rem+2rem+1rem)]">
            <h2 className="text-lg font-bold tracking-tight mb-5">Delivery details</h2>

            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <FormInput icon={<User size={14} />} label="First name" placeholder="Marko" />
              <FormInput icon={<User size={14} />} label="Last name" placeholder="Petrović" />
            </div>

            <div className="mb-3 mt-3">
              <label className="block text-[11px] font-medium text-muted-foreground mb-1.5">City</label>
              <select className="w-full bg-background border border-border text-sm py-3 px-4 rounded-xl outline-none focus:border-foreground/30 transition-colors">
                <option value="">Select city</option>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <FormInput icon={<MapPin size={14} />} label="Address" placeholder="Street, building, apt..." />
            <FormInput icon={<Phone size={14} />} label="Phone" type="tel" placeholder="+381 60 000 0000" />

            <label className="block text-[11px] font-medium text-muted-foreground mb-2 mt-1">Payment</label>
            <div className="flex flex-col gap-2 mb-5">
              {[
                { id: 'cod', title: 'Cash on delivery', sub: 'Pay on arrival', icon: '💵' },
                { id: 'card', title: 'Card / Online', sub: 'Visa, Mastercard', icon: '💳' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setPayment(opt.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                    payment === opt.id ? 'border-foreground/20 bg-secondary' : 'border-border hover:border-foreground/15'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${payment === opt.id ? 'border-foreground bg-foreground' : 'border-border'}`}>
                    {payment === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-background" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{opt.title}</div>
                    <div className="text-[11px] text-muted-foreground">{opt.sub}</div>
                  </div>
                  <span className="text-lg">{opt.icon}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleOrder}
              disabled={items.length === 0}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Confirm order — {total}€
            </button>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { icon: '🔒', text: 'Secure payment' },
                { icon: '🚚', text: '24-48h delivery' },
                { icon: '📦', text: 'Discreet' },
                { icon: '↩️', text: 'Easy returns' },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <span>{t.icon}</span> {t.text}
                </div>
              ))}
            </div>
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
    <div className="mb-3">
      <label className="block text-[11px] font-medium text-muted-foreground mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">{icon}</span>
        <input type={type} placeholder={placeholder} className="w-full bg-background border border-border text-sm py-3 pl-10 pr-4 rounded-xl outline-none transition-all focus:border-foreground/30 placeholder:text-muted-foreground/50" />
      </div>
    </div>
  );
}
