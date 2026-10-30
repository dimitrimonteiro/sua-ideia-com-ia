import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { CHECKOUT_URL, COVER_IMAGE } from "./config";

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? "in" : ""} ${className}`}>{children}</div>;
}

export const BuyButton = ({ children, className = "" }) => (
  <a href={CHECKOUT_URL} className={`group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-violet px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg font-extrabold tracking-wide text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_-10px_rgba(124,58,237,0.7)] active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 ${className}`}>
    {children}
    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
  </a>
);

// Novo componente: Botão fixo no rodapé exclusivo para Mobile
export const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#080D24]/90 p-4 backdrop-blur-md md:hidden">
    <BuyButton className="w-full py-4 text-sm sm:text-base">QUERO GARANTIR MEU E-BOOK</BuyButton>
  </div>
);

// Reduzido o padding Y no mobile (de py-20 para py-12) para leitura mais ágil
export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative px-5 py-12 sm:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

export const Title = ({ children, sub, center = true }) => (
  <div className={`mb-10 sm:mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">{children}</h2>
    {sub && <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-mist">{sub}</p>}
  </div>
);

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 shadow-soft backdrop-blur transition hover:border-violet/50 ${className}`}>{children}</div>
);

export const IconBox = ({ icon: Icon }) => (
  <div className="mb-4 sm:mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet shadow-glow">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </div>
);

export function Cover({ className = "" }) {
  if (COVER_IMAGE) return <img src={COVER_IMAGE} alt="Capa do e-book Sua Ideia com IA" className={`rounded-xl shadow-glow ${className}`} loading="lazy" />;
  return (
    <div className={`flex aspect-[3/4] flex-col justify-between rounded-xl border border-white/20 bg-gradient-to-br from-brand via-[#3b3fd6] to-violet p-5 shadow-glow ${className}`} role="img" aria-label="Capa ilustrativa do e-book">
      <BookOpen className="h-8 w-8 text-white/90" aria-hidden="true" />
      <div>
        <p className="text-2xl font-extrabold leading-tight">Sua Ideia<br />com IA</p>
        <p className="mt-2 text-[10px] text-white/80">Do zero ao seu primeiro projeto digital</p>
      </div>
    </div>
  );
}

export function MiniSite({ label = "Seu Negócio", compact = false }) {
  return (
    <div className="h-full w-full bg-[#0f1640] p-2 text-left">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold sm:text-[10px]">{label}</span>
        <span className="flex gap-1"><i className="h-1 w-4 rounded bg-white/30" /><i className="h-1 w-4 rounded bg-white/30" /></span>
      </div>
      <div className="mt-2 rounded-lg bg-gradient-to-br from-brand to-violet p-2">
        <div className="h-1.5 w-3/4 rounded bg-white/90" />
        <div className="mt-1 h-1 w-1/2 rounded bg-white/60" />
        <div className="mt-2 h-2.5 w-10 rounded bg-white" />
      </div>
      <div className={`mt-2 grid gap-1 ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
        {[0, 1, 2, 3].slice(0, compact ? 2 : 3).map((i) => <div key={i} className="aspect-square rounded bg-white/10" />)}
      </div>
    </div>
  );
}

export const Laptop = ({ label, className = "" }) => (
  <div className={className} aria-hidden="true">
    <div className="rounded-t-xl border-4 border-b-0 border-slate-600 bg-slate-800 p-1">
      <div className="aspect-[16/10] overflow-hidden rounded-md"><MiniSite label={label} /></div>
    </div>
    <div className="h-2 rounded-b-xl bg-slate-500" style={{ margin: "0 -4%" }} />
  </div>
);

export const Phone = ({ label, className = "" }) => (
  <div className={`rounded-2xl border-4 border-slate-600 bg-slate-800 shadow-soft ${className}`} aria-hidden="true">
    <div className="aspect-[9/17] overflow-hidden rounded-xl"><MiniSite label={label} compact /></div>
  </div>
);
