import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState<Record<string, boolean>>({});

  const togglePass = (id: string) => setShowPass(p => ({ ...p, [id]: !p[id] }));

  const handleLogin = () => toast.success('Dobrodošli! Prijava uspešna.');
  const handleRegister = () => { toast.success('Nalog kreiran!'); setTab('login'); };

  return (
    <main className="pt-[90px] min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 55% 55% at 28% 38%, hsl(264 100% 67% / 0.12) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 72% 62%, hsl(186 100% 50% / 0.09) 0%, transparent 65%)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-[1] w-full max-w-[430px] bg-card/92 backdrop-blur-2xl border border-foreground/14 rounded-xl p-8 max-sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_0_1px_hsl(var(--primary)/0.08)]"
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* Tab switcher */}
        <div className="flex gap-1 bg-card rounded-lg p-1 mb-8">
          {(['login', 'register'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 font-mono text-[0.62rem] font-bold tracking-widest uppercase py-2 rounded-md text-center transition-all ${
                tab === t ? 'bg-primary/16 text-primary border border-primary/28' : 'text-muted-foreground border border-transparent'
              }`}
            >
              {t === 'login' ? 'Prijava' : 'Registracija'}
            </button>
          ))}
        </div>

        {tab === 'login' ? (
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-1">Dobrodošli nazad</h2>
            <p className="text-sm text-muted-foreground mb-7">Prijavite se i pratite vaše porudžbine</p>

            <InputField icon={<Mail size={16} />} label="Email adresa" type="email" placeholder="vase@email.com" />
            <InputField
              icon={<Lock size={16} />} label="Lozinka"
              type={showPass['login'] ? 'text' : 'password'} placeholder="••••••••"
              suffix={
                <button onClick={() => togglePass('login')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1">
                  {showPass['login'] ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />
            <a href="#" className="block text-right font-mono text-[0.58rem] text-primary opacity-80 hover:opacity-100 -mt-2 mb-5">Zaboravili ste lozinku?</a>

            <button onClick={handleLogin} className="w-full py-3.5 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground font-bold glow-violet hover:glow-violet-lg transition-all">
              Prijavi se
            </button>

            <Divider />
            <SocialButtons />
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-1">Kreiraj nalog</h2>
            <p className="text-sm text-muted-foreground mb-7">Brz proces — pratite porudžbine i istoriju kupovina</p>

            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <InputField icon={<User size={15} />} label="Ime" placeholder="Marko" />
              <InputField icon={<User size={15} />} label="Prezime" placeholder="Petrović" />
            </div>
            <InputField icon={<Mail size={15} />} label="Email adresa" type="email" placeholder="vase@email.com" />
            <InputField icon={<Phone size={15} />} label="Broj telefona" type="tel" placeholder="+381 60 000 0000" />
            <InputField
              icon={<Lock size={15} />} label="Lozinka"
              type={showPass['reg'] ? 'text' : 'password'} placeholder="Min. 8 karaktera"
              suffix={
                <button onClick={() => togglePass('reg')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1">
                  {showPass['reg'] ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            <button onClick={handleRegister} className="w-full py-3.5 rounded-lg bg-gradient-to-br from-primary to-[#6a00ff] text-primary-foreground font-bold glow-violet hover:glow-violet-lg transition-all">
              Kreiraj nalog
            </button>

            <Divider />
            <SocialButtons />
          </div>
        )}
      </motion.div>
    </main>
  );
}

function InputField({ icon, label, type = 'text', placeholder, suffix }: {
  icon: React.ReactNode; label: string; type?: string; placeholder: string; suffix?: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="block font-mono text-[0.58rem] tracking-widest uppercase text-muted-foreground mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.38] pointer-events-none">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-card border border-border text-foreground font-display text-sm py-3.5 pl-11 pr-4 rounded-lg outline-none transition-all focus:border-primary/55 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.12)] placeholder:text-muted-foreground placeholder:text-xs"
          style={suffix ? { paddingRight: '3rem' } : undefined}
        />
        {suffix}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-5 font-mono text-[0.58rem] tracking-widest uppercase text-muted-foreground">
      <div className="flex-1 h-px bg-border" />
      ili nastavi sa
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="flex gap-3 max-sm:flex-col">
      {['📘 Facebook', '🔍 Google'].map(label => (
        <button key={label} className="flex-1 flex items-center justify-center gap-2 py-3 font-mono text-[0.6rem] font-bold tracking-wider uppercase bg-card border border-border text-foreground rounded-lg hover:border-foreground/20 hover:bg-foreground/[0.06] transition-colors">
          {label}
        </button>
      ))}
    </div>
  );
}
