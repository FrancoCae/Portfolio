import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Mail,
  MousePointer2,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const skills = [
  { name: "Python", icon: Terminal },
  { name: "SQL", icon: Database },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Pandas", icon: BarChart3 },
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Git", icon: GitBranch },
  { name: "JavaScript", icon: Terminal },
  { name: "Data Visualization", icon: BarChart3 },
];

const projects = [
  {
    title: "Martina Studio",
    type: "Proyecto para cliente / E-commerce",
    description:
      "Sitio web moderno de accesorios con catálogo de productos, experiencia de compra y backend desarrollado con Laravel para la gestión de productos y contenido.",
    tech: ["React", "Next.js", "Tailwind CSS", "Laravel"],
    accent: "from-[#181311] via-[#241d1a] to-[#2f2722]",
  },
  {
    title: "GEPCORP",
    type: "Sitio Web Corporativo",
    description:
      "Sitio web corporativo para una empresa de consultoría energética enfocado en diseño responsive, presentación profesional y experiencia moderna.",
    tech: ["React", "Web Development", "UI Design"],
    accent: "from-[#071a12] via-[#0f3d2e] to-[#1b5e49]",
  },
  {
    title: "Proyecto de Machine Learning",
    type: "Data Science",
    description:
      "Proyecto de Machine Learning desarrollado con Python, Pandas y Scikit-learn enfocado en análisis predictivo y exploración de datos.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    accent: "from-[#d8f3dc] via-[#52b788] to-[#1b4332]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] transition duration-300 sm:px-8 ${
        variant === "primary"
          ? "bg-mist text-night shadow-glow hover:bg-white"
          : "border border-white/15 bg-white/[0.03] text-mist backdrop-blur hover:border-white/35 hover:bg-white/[0.08]"
      }`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.34em] text-mist/70"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-mist" />
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-400, 400], [6, -6]);
  const rotateY = useTransform(mouseX, [-400, 400], [-6, 6]);

  return (
    <section
      className="relative flex min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12"
      onMouseMove={(event) => {
        mouseX.set(event.clientX - window.innerWidth / 2);
        mouseY.set(event.clientY - window.innerHeight / 2);
      }}
    >
      <div className="absolute inset-0 animated-grid opacity-60" />
      <div className="noise-layer" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BBCCD7]/10 blur-3xl"
        animate={{ scale: [1, 1.14, 1], opacity: [0.42, 0.68, 0.42] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col">
        <nav className="flex items-center justify-between gap-5">
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold uppercase tracking-[0.32em] text-mist"
          >
            FC
          </motion.a>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            className="hidden items-center gap-8 md:flex"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-medium uppercase tracking-[0.28em] text-mist/80 transition duration-300 hover:text-white hover:opacity-70"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 2xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13, delayChildren: 0.24 } },
            }}
            className="max-w-5xl"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.34em] text-mist/60"
            >
              Ciencia de Datos y Desarrollo
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-text max-w-6xl pr-4 text-[clamp(4rem,13vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.04em]"
            >
              Franco Caetano
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-3xl text-[clamp(1.35rem,3vw,3rem)] font-light leading-tight text-mist"
            >
              Estudiante de Ciencia de Datos y Desarrollador
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base font-light leading-8 text-mist/64 sm:text-lg"
            >
              Background académico con formación internacional Cambridge IGCSE e apasionado por Machine Learning, análisis de datos, Python y desarrollo web moderno.
              Actualmente estudiando Ciencia de Datos en la UBA y construyendo proyectos reales.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton href="#proyectos">Ver Proyectos</MagneticButton>
              <MagneticButton href="#contacto" variant="secondary">
                Contactarme
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden aspect-square w-full max-w-[34rem] 2xl:block"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-glow backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-[#101214]" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-mist backdrop-blur"
            >
              <BrainCircuit className="mb-8 h-9 w-9" />
              <p className="text-xs uppercase tracking-[0.28em] text-mist/50">
  Stack principal
</p>

<p className="mt-2 text-3xl font-semibold leading-tight">
Python · SQL · ML
</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-8 w-64 rounded-2xl border border-white/10 bg-mist p-5 text-night shadow-2xl"
            >
              <MousePointer2 className="mb-12 h-8 w-8" />
              <p className="text-xs uppercase tracking-[0.28em] text-night/50">Proyectos
              </p>
              <p className="mt-2 text-2xl font-semibold">Frontend & Data</p>
            </motion.div>
            <div className="absolute bottom-20 left-12 h-24 w-52 rounded-full bg-[#BBCCD7]/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#BBCCD7]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#646973]/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <SectionLabel>Sobre mí</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-none tracking-[-0.035em]"
        >
          Sobre mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-4xl space-y-8 text-[clamp(1.25rem,2.25vw,2.35rem)] font-light leading-[1.25] text-mist/82"
        >
          <p>
            Soy estudiante de Ciencia de Datos en la Universidad de Buenos Aires (UBA), con
            un fuerte interés en Machine Learning, análisis de datos y desarrollo de software.
          </p>
          <p>
            Disfruto construir proyectos que combinan tecnología, diseño y resolución de
            problemas — desde notebooks de Data Science y modelos de Machine Learning hasta
            experiencias web modernas y proyectos reales para clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="relative rounded-t-[2.5rem] bg-[#f4f7f9] px-5 py-24 text-night sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-night/45">
              Stack técnico
            </p>
            <h2 className="text-[clamp(3.25rem,8vw,8.5rem)] font-black uppercase leading-none tracking-[-0.045em]">
              Habilidades
            </h2>
          </div>
          <p className="max-w-xl text-lg font-light leading-8 text-night/60">
            Herramientas para convertir datos, interfaces y problemas complejos en productos
            claros, rápidos y útiles.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.045 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.35rem] border border-black/10 bg-white/65 p-6 shadow-[0_20px_70px_rgba(12,12,12,0.06)] backdrop-blur transition duration-300 hover:border-black/20 hover:bg-white"
              >
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-night text-mist transition duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96 + index * 0.01]);

  return (
    <motion.article
      style={{ scale, top: `${92 + index * 26}px` }}
      className="static mb-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:p-8 md:sticky md:mb-16 lg:mb-10 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-between lg:min-h-[26rem]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-mist/45">
              {project.type}
            </p>
            <h3 className="mt-5 text-[clamp(2.6rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-mist">
              {project.title}
            </h3>
            <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-mist/66">
              {project.description}
            </p>
          </div>
          <div>
            <div className="mt-9 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

  {project.title === "Martina Studio" ? (
    <>
      <MagneticButton href="#" variant="primary">
        Próximamente
      </MagneticButton>
    </>
  ) : project.title === "GEPCORP" ? (
    <>
      <MagneticButton href="#" variant="primary">
      Próximamente
      </MagneticButton>
    </>
  ) : (
    <>
      <MagneticButton href="#" variant="secondary">
      Próximamente
      </MagneticButton>

      <MagneticButton href="#" variant="primary">
      Próximamente
      </MagneticButton>
    </>
  )}

</div>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`relative h-[380px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br lg:h-auto lg:min-h-[24rem] ${project.accent}`}
        >
          <div className="absolute inset-0 opacity-30 animated-grid" />
          <div className="absolute inset-6 rounded-[1.2rem] border border-white/25 bg-black/20 backdrop-blur-sm" />
          <motion.div
  whileHover={{ scale: 1.015 }}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  className={`relative h-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.accent}`}
      >
  {project.title === "Martina Studio" ? (
    <div className="grid h-full grid-cols-[0.42fr_0.58fr] gap-4 p-5">
      
      <div className="flex min-h-0 flex-col gap-4">
        <img
          src="/catalogo.png"
          alt="Catálogo de Martina Studio"
          className="h-1/2 w-full rounded-[1.4rem] bg-white object-contain p-2"
        />

        <img
          src="/carrito.png"
          alt="Carrito de Martina Studio"
          className="h-1/2 w-full rounded-[1.4rem] bg-white object-contain p-2"
        />
      </div>

      <img
        src="/main.png"
        alt="Página principal de Martina Studio"
        className="h-full w-full rounded-[1.4rem] bg-white object-contain p-2"
      />
    </div>
    ) : project.title === "GEPCORP" ? (

      <div className="h-full p-5">
        <img
          src="/gepcorp_hero.png"
          alt="GEPCORP Website"
          className="h-full w-full rounded-[1.4rem] object-cover"
        />
      </div>
    
    
  ) : (
    <div className="flex h-full items-center justify-center p-5 text-mist/60">
      Próximamente imágenes del proyecto
    </div>
  )}
</motion.div>
          <motion.div
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 right-8 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-night"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <section id="proyectos" className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>Proyectos</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <h2 className="gradient-text max-w-5xl text-[clamp(3.25rem,8vw,8.5rem)] font-black uppercase leading-none tracking-[-0.045em]">
            Proyectos Seleccionados
          </h2>
          <p className="max-w-md text-lg font-light leading-8 text-mist/62">
            Una mezcla de desarrollo para clientes, diseño de interfaces y trabajo aplicado
            con datos.
          </p>
        </motion.div>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BBCCD7]/10 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl text-center"
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-mist/55 sm:tracking-[0.34em]">
          Contacto
        </p>
        <h2 className="gradient-text mx-auto max-w-full px-4 text-center text-[clamp(2.1rem,11vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[clamp(4rem,10vw,10rem)] sm:leading-[0.88] sm:tracking-[-0.06em]">
  Construyamos
  <br />
  Algo
</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-8 text-mist/68 sm:text-xl sm:leading-9">
          Siempre estoy interesado en nuevas oportunidades, colaboraciones y proyectos
          relacionados con Data Science, Machine Learning y desarrollo.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <MagneticButton href="https://www.linkedin.com/in/francocaetano/" variant="primary">
            <BriefcaseBusiness className="h-4 w-4" />
            LinkedIn
          </MagneticButton>
          <MagneticButton href="https://github.com/FrancoCae" variant="secondary">
            <GitBranch className="h-4 w-4" />
            GitHub
          </MagneticButton>
          <MagneticButton href="https://mail.google.com/mail/?view=cm&fs=1&to=francocaetano20@gmail.com" variant="secondary">
            <Mail className="h-4 w-4" />
            Gmail
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <main id="top" className="overflow-x-clip bg-night font-kanit text-mist">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
