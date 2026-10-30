import { Lightbulb, Brain, Hammer, Palette, Bug, Rocket, Code2, Store, Calculator, LayoutList, Globe, BookOpen, Sparkles, ListChecks, ClipboardCheck, Languages, CheckCircle2, Plus, Gift, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { OFFER } from "./config";
import { Reveal, BuyButton, Section, Title, Card, IconBox, Cover, Laptop, Phone, StickyMobileCTA } from "./ui";

const problems = [
  { icon: Lightbulb, t: "Você tem uma ideia, mas não sabe desenvolver." },
  { icon: Code2, t: "Acredita que precisa aprender programação antes de começar." },
  { icon: Store, t: "Tem um negócio e gostaria de ter seu próprio site ou catálogo." },
];

const learn = [
  { icon: Lightbulb, t: "Planejamento", d: "Transforme sua ideia em um projeto." },
  { icon: Brain, t: "Inteligência artificial", d: "Aprenda a utilizar o Claude." },
  { icon: Hammer, t: "Criação", d: "Construa seu primeiro site ou ferramenta." },
  { icon: Palette, t: "Personalização", d: "Adapte o projeto à sua identidade." },
  { icon: Bug, t: "Testes", d: "Identifique e corrija problemas." },
  { icon: Rocket, t: "Publicação", d: "Coloque seu projeto no ar." },
];

const examples = [
  { icon: Store, t: "Site para pequena empresa", label: "Padaria Bom Dia" },
  { icon: LayoutList, t: "Catálogo digital de produtos", label: "Catálogo" },
  { icon: Globe, t: "Página profissional", label: "Seu Nome" },
  { icon: Calculator, t: "Calculadora personalizada", label: "Calculadora" },
  { icon: ListChecks, t: "Ferramenta de organização", label: "Organizador" },
];

const included = [
  { icon: BookOpen, t: "E-book completo em PDF" },
  { icon: Sparkles, t: "Prompts prontos para utilizar" },
  { icon: Hammer, t: "Exemplos práticos" },
  { icon: Lightbulb, t: "Lista de ideias de projetos" },
  { icon: ClipboardCheck, t: "Checklist para publicação" },
  { icon: Languages, t: "Glossário" },
];

const forYou = [
  "Tem ideias e quer transformá-las em projetos digitais.",
  "É empreendedor ou pequeno comerciante.",
  "Quer criar uma presença digital.",
  "Nunca desenvolveu um site.",
];

const faqs = [
  ["Preciso saber programar?", "Não. O material foi desenvolvido para iniciantes e apresenta um processo guiado com inteligência artificial."],
  ["O que vou receber?", "Um e-book digital em PDF com orientações, exemplos, prompts e materiais complementares."],
  ["Qual ferramenta será utilizada?", "O guia ensina a utilizar o Claude como assistente na criação dos projetos."],
  ["Posso criar qualquer tipo de sistema?", "O guia é voltado principalmente à criação de sites e ferramentas digitais simples. Projetos mais complexos podem exigir conhecimentos adicionais."],
  ["Como recebo o produto?", "O acesso é digital, após a confirmação da compra, conforme a entrega configurada na plataforma."],
];

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] mb-3">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold focus:outline-none rounded-2xl">
        <span className="text-sm sm:text-base">{q}</span>
        <Plus className={`h-5 w-5 shrink-0 text-violet transition-transform ${open ? "rotate-45" : ""}`} aria-hidden="true" />
      </button>
      {open && <p className="px-5 pb-5 text-sm sm:text-base leading-relaxed text-mist">{a}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main className="overflow-x-hidden pb-20 md:pb-0"> {/* Padding bottom extra no mobile por causa do sticky button */}
      <StickyMobileCTA />
      
      {/* HERO */}
      <header className="relative px-5 pb-16 pt-10 sm:pt-20">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[140px]" />
        
        {/* Ordem invertida no mobile para a imagem não empurrar o CTA pra baixo */}
        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 lg:grid lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left z-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-mist"><Sparkles className="h-4 w-4 text-violet" aria-hidden="true" />E-book prático em PDF</p>
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">Você tem uma ideia de site, mas não sabe por onde começar?</h1>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-mist lg:mx-0">Aprenda a transformar ideias em sites e ferramentas digitais do zero, usando a IA como sua programadora.</p>
            <p className="mt-4 inline-block bg-gradient-to-r from-brand to-violet bg-clip-text text-lg sm:text-xl font-extrabold text-transparent">Sem precisar de experiência técnica.</p>
            <div className="mt-8 hidden md:block"><BuyButton>QUERO TIRAR MINHA IDEIA DO PAPEL</BuyButton></div>
          </div>
          
          <div className="relative mx-auto h-[280px] w-full max-w-[400px] sm:h-[440px] sm:max-w-[520px]" style={{ perspective: "1200px" }}>
            <div className="absolute left-0 top-4 w-[78%] animate-float" style={{ transform: "rotateY(-14deg) rotateX(4deg)" }}><Laptop label="Seu Projeto" /></div>
            <div className="absolute bottom-4 left-[18%] w-[34%] animate-float" style={{ transform: "rotateY(18deg) rotateZ(-4deg)", animationDelay: "1s" }}><Cover /></div>
            <div className="absolute bottom-0 right-0 w-[24%] animate-float" style={{ transform: "rotateY(-12deg)", animationDelay: "2s" }}><Phone label="Seu Projeto" /></div>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <Section>
        <Reveal><Title>Quantas ideias você deixou de lado por não saber como começar?</Title></Reveal>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}><Card className="h-full flex flex-col items-center text-center sm:items-start sm:text-left"><IconBox icon={p.icon} /><p className="text-base sm:text-lg font-bold leading-snug">{p.t}</p></Card></Reveal>
          ))}
        </div>
        <Reveal><p className="mx-auto mt-10 sm:mt-14 max-w-2xl text-center text-xl sm:text-2xl font-extrabold leading-snug">E se você pudesse começar utilizando inteligência artificial como sua assistente?</p></Reveal>
      </Section>

      {/* SOLUÇÃO */}
      <Section className="bg-white/[0.03]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="mx-auto w-40 sm:w-64"><Cover /></Reveal>
          <Reveal className="text-center lg:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-5xl">Conheça o Sua Ideia com IA</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-mist">Um e-book que apresenta um caminho prático para transformar ideias em projetos digitais utilizando o Claude. Você aprende passo a passo, em linguagem simples, sem precisar de conhecimento técnico prévio.</p>
            <div className="mt-8 hidden md:block"><BuyButton>QUERO CONHECER O E-BOOK</BuyButton></div>
          </Reveal>
        </div>
      </Section>

      {/* APRENDER */}
      <Section>
        <Reveal><Title sub="Um processo guiado, do primeiro rascunho até o projeto publicado.">O que você vai aprender</Title></Reveal>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {learn.map((l, i) => (
            <Reveal key={l.t} delay={i * 80}><Card className="h-full"><IconBox icon={l.icon} /><h3 className="text-lg sm:text-xl font-extrabold">{l.t}</h3><p className="mt-2 text-sm sm:text-base text-mist">{l.d}</p></Card></Reveal>
          ))}
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section className="bg-white/[0.03]">
        <Reveal><Title>Para quem é?</Title></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal><Card className="h-full">
            <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-extrabold">É para você que:</h3>
            <ul className="space-y-3 sm:space-y-4">{forYou.map((f) => <li key={f} className="flex gap-3 text-sm sm:text-base"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-brand" aria-hidden="true" /><span>{f}</span></li>)}</ul>
          </Card></Reveal>
          <Reveal delay={100}><Card className="flex h-full flex-col justify-center border-violet/40 bg-gradient-to-br from-brand/20 to-violet/20 text-center py-8">
            <Code2 className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
            <p className="text-xl sm:text-2xl font-extrabold">Não é necessário ter experiência em programação.</p>
          </Card></Reveal>
        </div>
      </Section>

      {/* OFERTA */}
      <Section id="oferta">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-violet/50 bg-gradient-to-br from-brand/20 via-navy to-violet/25 p-6 shadow-[0_0_50px_-12px_rgba(124,58,237,0.4)] sm:p-12">
            {/* Tag de destaque visual */}
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-r from-brand to-violet px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">Oferta Especial</div>
            
            <div className="grid items-center gap-8 md:grid-cols-[220px_1fr] mt-4 sm:mt-0">
              <div className="mx-auto w-32 sm:w-44 md:w-full"><Cover /></div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-extrabold sm:text-4xl">Sua Ideia com IA</h2>
                <p className="mt-1 text-sm sm:text-base text-mist">E-book digital em PDF</p>
                
                <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-left">{included.map((x) => <li key={x.t} className="flex items-center gap-2 text-xs sm:text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />{x.t}</li>)}</ul>
                {OFFER.bonuses.length > 0 && <ul className="mt-4 space-y-2 text-left">{OFFER.bonuses.map((b) => <li key={b} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-300"><Gift className="h-4 w-4 shrink-0" aria-hidden="true" />{b}</li>)}</ul>}
                
                <div className="mt-6 sm:mt-8 rounded-2xl bg-white/5 p-4 border border-white/10">
                  {OFFER.oldPrice && <p className="text-sm text-mist line-through mb-1">{OFFER.oldPrice}</p>}
                  <p className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-white to-mist bg-clip-text text-transparent">{OFFER.price || "Preço a definir"}</p>
                  {OFFER.paymentNote && <p className="text-xs sm:text-sm text-mist mt-1">{OFFER.paymentNote}</p>}
                </div>
                
                <div className="mt-6 hidden md:block"><BuyButton className="w-full">QUERO O MEU E-BOOK AGORA</BuyButton></div>
                {OFFER.guarantee && <p className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-mist"><ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-brand" aria-hidden="true" />{OFFER.guarantee}</p>}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="bg-white/[0.03]">
        <Reveal><Title>Perguntas frequentes</Title></Reveal>
        <div className="mx-auto max-w-3xl">{faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}</div>
      </Section>

      <footer className="border-t border-white/10 px-5 pb-24 pt-8 sm:pb-8 text-center text-xs sm:text-sm text-mist">
        &copy; {new Date().getFullYear()} Sua Ideia com IA. Todos os direitos reservados.
      </footer>
    </main>
  );
}
