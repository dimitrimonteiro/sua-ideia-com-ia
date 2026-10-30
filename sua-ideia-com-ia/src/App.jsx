import { Lightbulb, Brain, Hammer, Palette, Bug, Rocket, Code2, HelpCircle, Store, Calculator, LayoutList, Globe, BookOpen, Sparkles, ListChecks, ClipboardCheck, Languages, CheckCircle2, Plus, Gift, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { OFFER } from "./config";
import { Reveal, BuyButton, Section, Title, Card, IconBox, Cover, Laptop, Phone } from "./ui";

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
  { icon: Store, t: "Site para uma pequena empresa", label: "Padaria Bom Dia" },
  { icon: LayoutList, t: "Catálogo digital de produtos", label: "Catálogo" },
  { icon: Globe, t: "Página de apresentação profissional", label: "Seu Nome" },
  { icon: Calculator, t: "Calculadora personalizada", label: "Calculadora" },
  { icon: ListChecks, t: "Ferramenta simples para organizar informações", label: "Organizador" },
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
  ["Posso criar qualquer tipo de sistema?", "O guia é voltado principalmente à criação de sites e ferramentas digitais simples. Projetos mais complexos podem exigir conhecimentos e serviços adicionais."],
  ["Como recebo o produto?", "O acesso é digital, após a confirmação da compra, conforme a entrega configurada na plataforma."],
];

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04]">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-violet rounded-2xl">
        {q}<Plus className={`h-5 w-5 shrink-0 text-violet transition ${open ? "rotate-45" : ""}`} aria-hidden="true" />
      </button>
      {open && <p className="px-5 pb-5 leading-relaxed text-mist">{a}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <header className="relative px-5 pb-20 pt-12 sm:pt-20">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/30 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-violet/30 blur-[140px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-mist"><Sparkles className="h-4 w-4 text-violet" aria-hidden="true" />E-book digital em PDF</p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Você tem uma ideia de site, mas não sabe nem por onde começar?</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">Aprenda a transformar suas ideias em sites e ferramentas digitais do zero, utilizando inteligência artificial, mesmo sem experiência técnica.</p>
            <p className="mt-5 inline-block bg-gradient-to-r from-brand to-violet bg-clip-text text-xl font-extrabold text-transparent">Do zero ao seu primeiro projeto digital.</p>
            <div className="mt-9"><BuyButton className="w-full sm:w-auto">QUERO TIRAR MINHA IDEIA DO PAPEL</BuyButton></div>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[440px]" style={{ perspective: "1200px" }}>
            <div className="absolute left-0 top-10 w-[78%] animate-float" style={{ transform: "rotateY(-14deg) rotateX(4deg)" }}><Laptop label="Seu Projeto" /></div>
            <div className="absolute bottom-0 left-[18%] w-[34%] animate-float" style={{ transform: "rotateY(18deg) rotateZ(-4deg)", animationDelay: "1s" }}><Cover /></div>
            <div className="absolute bottom-2 right-0 w-[24%] animate-float" style={{ transform: "rotateY(-12deg)", animationDelay: "2s" }}><Phone label="Seu Projeto" /></div>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <Section>
        <Reveal><Title>Quantas ideias você já deixou de lado por não saber como começar?</Title></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}><Card className="h-full"><IconBox icon={p.icon} /><p className="text-lg font-bold leading-snug">{p.t}</p></Card></Reveal>
          ))}
        </div>
        <Reveal><p className="mx-auto mt-14 max-w-2xl text-center text-2xl font-extrabold leading-snug">E se você pudesse começar utilizando inteligência artificial como sua assistente?</p></Reveal>
      </Section>

      {/* SOLUÇÃO */}
      <Section className="bg-white/[0.03]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="mx-auto w-48 sm:w-64"><Cover /></Reveal>
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Conheça o Sua Ideia com IA</h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">Um e-book que apresenta um caminho prático para transformar ideias em projetos digitais utilizando o Claude, da Anthropic. Você aprende passo a passo, em linguagem simples, sem precisar de conhecimento técnico.</p>
            <div className="mt-8"><BuyButton>QUERO CONHECER O E-BOOK</BuyButton></div>
          </Reveal>
        </div>
      </Section>

      {/* APRENDER */}
      <Section>
        <Reveal><Title sub="Um processo guiado, do primeiro rascunho até o projeto publicado.">O que você vai aprender</Title></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learn.map((l, i) => (
            <Reveal key={l.t} delay={i * 80}><Card className="h-full"><IconBox icon={l.icon} /><h3 className="text-xl font-extrabold">{l.t}</h3><p className="mt-2 text-mist">{l.d}</p></Card></Reveal>
          ))}
        </div>
      </Section>

      {/* EXEMPLOS */}
      <Section className="bg-white/[0.03]">
        <Reveal><Title sub="Imagens ilustrativas do tipo de projeto que você aprende a construir.">Exemplos do que você pode criar</Title></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((e, i) => (
            <Reveal key={e.t} delay={i * 80}>
              <Card className="h-full overflow-hidden p-5">
                <div className="relative mb-5 rounded-2xl bg-gradient-to-br from-brand/20 to-violet/20 p-4 pb-0">
                  <Laptop label={e.label} />
                  <Phone label={e.label} className="absolute -bottom-3 right-3 w-[22%]" />
                </div>
                <div className="flex items-start gap-3"><e.icon className="mt-0.5 h-5 w-5 shrink-0 text-violet" aria-hidden="true" /><h3 className="font-bold leading-snug">{e.t}</h3></div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INCLUÍDO */}
      <Section>
        <Reveal><Title>O que está incluído</Title></Reveal>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {included.map((x, i) => (
            <Reveal key={x.t} delay={i * 60}><div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"><x.icon className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><span className="font-bold">{x.t}</span></div></Reveal>
          ))}
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section className="bg-white/[0.03]">
        <Reveal><Title>Para quem é</Title></Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal><Card className="h-full">
            <h3 className="mb-5 text-xl font-extrabold">É para você que:</h3>
            <ul className="space-y-4">{forYou.map((f) => <li key={f} className="flex gap-3"><CheckCircle2 className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" /><span>{f}</span></li>)}</ul>
          </Card></Reveal>
          <Reveal delay={100}><Card className="flex h-full flex-col justify-center border-violet/40 bg-gradient-to-br from-brand/20 to-violet/20 text-center">
            <Code2 className="mx-auto mb-4 h-10 w-10" aria-hidden="true" />
            <p className="text-2xl font-extrabold">Não é necessário ter experiência em programação.</p>
          </Card></Reveal>
        </div>
      </Section>

      {/* OFERTA */}
      <Section id="oferta">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-violet/40 bg-gradient-to-br from-brand/20 via-navy to-violet/25 p-8 shadow-glow sm:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
              <div className="mx-auto w-44 md:w-full"><Cover /></div>
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">Sua Ideia com IA</h2>
                <p className="mt-2 text-mist">E-book digital em PDF</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">{included.map((x) => <li key={x.t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />{x.t}</li>)}</ul>
                {OFFER.bonuses.length > 0 && <ul className="mt-5 space-y-2">{OFFER.bonuses.map((b) => <li key={b} className="flex items-center gap-2 text-sm font-bold"><Gift className="h-4 w-4 text-violet" aria-hidden="true" />{b}</li>)}</ul>}
                <div className="mt-7">
                  {OFFER.oldPrice && <p className="text-mist line-through">{OFFER.oldPrice}</p>}
                  <p className="text-4xl font-extrabold">{OFFER.price || "Preço a definir"}</p>
                  {OFFER.paymentNote && <p className="text-mist">{OFFER.paymentNote}</p>}
                </div>
                <div className="mt-6"><BuyButton className="w-full sm:w-auto">QUERO O MEU E-BOOK</BuyButton></div>
                {OFFER.guarantee && <p className="mt-5 flex items-start gap-2 text-sm text-mist"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />{OFFER.guarantee}</p>}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="bg-white/[0.03]">
        <Reveal><Title>Perguntas frequentes</Title></Reveal>
        <div className="mx-auto max-w-3xl space-y-3">{faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}</div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">Sua ideia não precisa continuar apenas no papel.</h2>
            <p className="mt-6 text-lg text-mist">Comece hoje a explorar o que você pode construir com a ajuda da inteligência artificial.</p>
            <div className="mt-9"><BuyButton className="w-full sm:w-auto">QUERO COMEÇAR AGORA</BuyButton></div>
          </div>
        </Reveal>
      </Section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-mist">© {new Date().getFullYear()} Sua Ideia com IA. Todos os direitos reservados.</footer>
    </main>
  );
}
