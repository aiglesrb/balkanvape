import { Shield, Truck, CheckCircle, Banknote } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[510] bg-secondary border-b border-border">
      <div className="flex items-center justify-center gap-4 md:gap-8 px-4 py-1.5 text-[0.6rem] md:text-[0.65rem] font-medium tracking-wider uppercase overflow-hidden">
        <span className="flex items-center gap-1.5 text-destructive shrink-0">
          <Shield size={12} />
          🔞 18+ samo
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-muted-foreground shrink-0">
          <Truck size={12} />
          Diskretna dostava
        </span>
        <span className="hidden md:flex items-center gap-1.5 text-muted-foreground shrink-0">
          <CheckCircle size={12} />
          EU usklađeni proizvodi
        </span>
        <span className="flex items-center gap-1.5 text-accent shrink-0">
          <Banknote size={12} />
          Plaćanje pouzećem
        </span>
      </div>
    </div>
  );
}
