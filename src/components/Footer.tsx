import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Health strip */}
      <div className="bg-neon-amber/[0.04] border-y border-neon-amber/10 py-4 px-6 text-center">
        <div className="font-mono text-[0.65rem] font-bold tracking-widest uppercase text-neon-amber/75">
          ⚠️ Zabranjena prodaja maloletnim licima
        </div>
        <div className="font-mono text-[0.56rem] text-neon-amber/45 tracking-wider mt-1 leading-relaxed">
          Pušenje šteti zdravlju · Nikotin izaziva zavisnost · Samo za osobe starije od 18 godina · Čuvati van domašaja dece
        </div>
      </div>

      {/* Legal strip */}
      <div className="bg-neon-amber/[0.02] border-t border-neon-amber/[0.07] py-3 px-6 text-center font-mono text-[0.55rem] text-neon-amber/[0.38] tracking-wider leading-relaxed">
        ⚠️ Nikotinski proizvodi · Samo 18+ · Cene u evrima (EUR) · Vape Balkan d.o.o. — Beograd, Srbija
      </div>

      <footer className="pt-16 pb-10 px-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto pb-10 border-b border-border">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="text-lg font-black tracking-wide mb-3">
              VAPE <span className="text-primary">BALKAN</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium puff iskustvo za srpsko tržište. Originalni proizvodi, brza dostava, cene u evrima.
            </p>
            <div className="flex gap-2 mt-5">
              {['📷', '💬', '📘', '🎵'].map((emoji, i) => (
                <button key={i} className="w-8 h-8 rounded-md bg-card border border-border flex items-center justify-center hover:border-foreground/20 hover:bg-foreground/[0.06] transition-colors text-sm">
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {[
            { title: 'Navigacija', links: [{ label: 'Početna', to: '/' }, { label: 'Prodavnica', to: '/shop' }, { label: 'Profil', to: '/profile' }, { label: 'Korpa', to: '/checkout' }] },
            { title: 'Kupovina', links: [{ label: 'Kako naručiti' }, { label: 'Dostava i cene' }, { label: 'Plaćanje pouzećem' }, { label: 'Povrat robe' }] },
            { title: 'Pravno', links: [{ label: 'Uslovi korišćenja' }, { label: 'Politika privatnosti' }, { label: 'Zakonska usklađenost' }, { label: 'Kontakt' }] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-mono text-[0.56rem] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    {'to' in link ? (
                      <Link to={link.to!} className="text-sm opacity-55 hover:opacity-100 hover:text-primary transition-all">{link.label}</Link>
                    ) : (
                      <a href="#" className="text-sm opacity-55 hover:opacity-100 hover:text-primary transition-all">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto mt-8 flex justify-between items-center flex-wrap gap-4 font-mono text-[0.58rem] text-muted-foreground tracking-wider">
          <span>© 2025 Vape Balkan d.o.o. — Sva prava zadržana</span>
          <span className="bg-destructive/10 border border-destructive/22 rounded px-3 py-1 text-destructive/75 font-bold">🔞 18+ ONLY</span>
          <span>Beograd, Srbija · PIB: 000000000</span>
        </div>
      </footer>
    </>
  );
}
