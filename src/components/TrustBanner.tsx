import { Shield, Truck, Eye, CheckCircle } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[510] bg-gradient-to-r from-primary/20 via-background to-secondary/20 border-b border-primary/20">
      <div className="flex items-center justify-center gap-4 md:gap-8 px-4 py-1.5 text-[0.6rem] md:text-[0.65rem] font-mono font-bold tracking-wider uppercase overflow-hidden">
        <span className="flex items-center gap-1.5 text-destructive shrink-0">
          <Shield size={12} />
          🔞 18+ uniquement
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-accent shrink-0">
          <Truck size={12} />
          Diskretna dostava
        </span>
        <span className="hidden md:flex items-center gap-1.5 text-secondary shrink-0">
          <CheckCircle size={12} />
          Proizvodi usklađeni sa EU
        </span>
        <span className="flex items-center gap-1.5 text-primary shrink-0">
          <Eye size={12} />
          Besplatna dostava 30€+
        </span>
      </div>
    </div>
  );
}
