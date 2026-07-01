import { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import caioCarvalho from "./assets/caio-carvalho.png";
import whatsappAgent from "./assets/whatsapp-agent.png";
import serviceHub from "./assets/servicehub-api.png";
import work1 from "./assets/work1.png";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeProject, setActiveProject] = useState(0);
  const [lang, setLang] = useState("pt");

  const whatsappNumber = "5524981182297";

  const whatsappMessage =
    lang === "pt"
      ? "Olá, Yago! Vim pelo seu portfólio e gostaria de conversar sobre um projeto."
      : "Hi, Yago! I found your portfolio and would like to talk about a project.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const content = {
    pt: {
      eyebrow: "Portfólio / Desenvolvimento / Automação",
      role: "Full Stack Developer",
      intro:
        "Construo interfaces, sistemas web e automações que conectam ideias a produtos reais.",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      location: "Brasil / remoto",
      availability: "Disponível para projetos selecionados",
      email: "github.com/YagoACarvalho",
      aboutLead:
        "Desenvolvedor focado em experiências digitais limpas, sistemas práticos e automações que resolvem problemas de negócio.",
      about1:
        "Gosto de transformar ideias em produtos funcionais: landing pages, dashboards, integrações com APIs, bancos de dados e fluxos de atendimento com inteligência artificial.",
      about2:
        "Hoje trabalho principalmente com React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n e integrações com WhatsApp.",
      servicesTitle: "Atuação",
      stackTitle: "Stack",
      statusTitle: "Status",
      projectLink: "Abrir projeto",
      privateProject: "Fluxo privado",
      contactTitle: "Vamos construir algo real?",
      contactText:
        "Estou aberto para projetos, parcerias e oportunidades em desenvolvimento, automação e criação de soluções digitais.",
      button: "Falar no WhatsApp",
      footer: "Desenvolvido por Yago Carvalho",
    },
    en: {
      eyebrow: "Portfolio / Development / Automation",
      role: "Full Stack Developer",
      intro:
        "I build interfaces, web systems and automations that turn ideas into real products.",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      location: "Brazil / remote",
      availability: "Available for selected projects",
      email: "github.com/YagoACarvalho",
      aboutLead:
        "Developer focused on refined digital experiences, practical systems and automations that solve business problems.",
      about1:
        "I like turning ideas into functional products: landing pages, dashboards, API integrations, databases and AI-powered customer workflows.",
      about2:
        "I currently work mainly with React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n and WhatsApp integrations.",
      servicesTitle: "Services",
      stackTitle: "Stack",
      statusTitle: "Status",
      projectLink: "Open project",
      privateProject: "Private workflow",
      contactTitle: "Let’s build something real?",
      contactText:
        "I am open to projects, partnerships and opportunities in development, automation and digital solutions.",
      button: "Message me on WhatsApp",
      footer: "Developed by Yago Carvalho",
    },
  };

  const t = content[lang];

  const navItems = [
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "contact", label: t.contact },
  ];

  const services =
    lang === "pt"
      ? [
          "Direção técnica",
          "Front-end development",
          "Automações com IA",
          "Integrações com APIs",
        ]
      : [
          "Technical direction",
          "Front-end development",
          "AI automations",
          "API integrations",
        ];

  const stack = [
    "React",
    "JavaScript",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "n8n",
    "Redis",
    "WhatsApp API",
  ];

  const experiences = [
    {
      year: "2025 — Atual",
      title:
        lang === "pt"
          ? "Desenvolvedor Web e Automação"
          : "Web Developer & Automation",
      company:
        lang === "pt"
          ? "Projetos próprios e clientes"
          : "Personal and client projects",
      description:
        lang === "pt"
          ? "Criação de sites, landing pages, sistemas web, automações, integrações com APIs e soluções digitais voltadas para negócios reais."
          : "Development of websites, landing pages, web systems, automations, API integrations and digital solutions for real businesses.",
      tags: ["React", "JavaScript", "n8n", "Supabase", "APIs"],
    },
    {
      year: "2024 — Atual",
      title: "Software Engineering Student",
      company: "UniCesumar",
      description:
        lang === "pt"
          ? "Formação em Engenharia de Software, com foco em programação, banco de dados, orientação a objetos e desenvolvimento de sistemas."
          : "Software Engineering degree focused on programming, databases, object-oriented programming and system development.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
  ];

  const projects = [
    {
      year: "2026",
      title: "Caio Carvalho Advocacia",
      displayTitle: ["Caio", "Carvalho"],
      image: caioCarvalho,
      category: "Web Project",
      description:
        lang === "pt"
          ? "Site institucional desenvolvido para um advogado, com identidade visual sóbria, layout premium, navegação por áreas de atuação e chamadas estratégicas para WhatsApp."
          : "Institutional website developed for a lawyer, featuring a sober visual identity, premium layout, practice-area navigation and strategic WhatsApp calls to action.",
      tags: ["React", "Vercel", "UI Design", "Responsive"],
      link: "https://caiocarvalhoadv.vercel.app/",
    },
    {
      year: "2026",
      title: "Work1 – Service Marketplace",
      displayTitle: ["Work1", "Marketplace"],
      image: work1,
      category: "Full Stack Platform",
      status: lang === "pt" ? "Em desenvolvimento" : "In progress",
      description:
        lang === "pt"
          ? "Plataforma web para conexão entre clientes e prestadores de serviços locais. Integra frontend em React com automações via n8n para processamento, armazenamento e distribuição inteligente dos leads."
          : "Web platform connecting clients with local service providers. It integrates a React frontend with n8n workflows for processing, storage and intelligent lead distribution.",
      tags: ["React", "n8n", "Supabase", "Automation", "Marketplace"],
      link: "https://workonejobs.vercel.app/",
    },
    {
      year: "2026",
      title: "WhatsApp Intelligent Agent",
      displayTitle: ["WhatsApp", "Agent"],
      image: whatsappAgent,
      category: "Automation & AI",
      description:
        lang === "pt"
          ? "Sistema de atendimento automatizado com agente inteligente para qualificação de leads via WhatsApp, controle anti-loop, fila de lembretes e organização por nível de interesse."
          : "Automated customer service system with an intelligent agent for WhatsApp lead qualification, anti-loop control, reminder queue and interest-level organization.",
      tags: [
        "n8n",
        "Redis",
        "LangChain",
        "Supabase",
        "MySQL",
        "Evolution API",
      ],
      link: "#",
    },
    {
      year: "2026",
      title: "ServiceHub API",
      displayTitle: ["Service", "Hub API"],
      image: serviceHub,
      category: "Backend API",
      status: lang === "pt" ? "Em desenvolvimento" : "In progress",
      description:
        lang === "pt"
          ? "API backend para marketplace de serviços, responsável por gerenciar usuários, prestadores e solicitações em uma arquitetura REST organizada e escalável."
          : "Backend API for a service marketplace, managing users, providers and requests through a clean and scalable REST architecture.",
      tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      link: "https://github.com/YagoACarvalho/ServiceHubAPIs",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");

    function handleScroll() {
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="vh-page">
      <style>{css}</style>
      <div className="vh-noise" aria-hidden="true" />

      <header className="vh-header">
        <a className="vh-logo" href="#top" aria-label="Yago Carvalho home">
          <span>YAGO</span>
          <span>CAR</span>
          <span>VALHO</span>
        </a>

        <nav className="vh-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              className={activeSection === item.id ? "is-active" : ""}
              href={`#${item.id}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="vh-lang"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          type="button"
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>
      </header>

      <section className="vh-hero" id="top">
        <div className="vh-heroIntro">
          <p>{t.eyebrow}</p>
          <h1>{t.role}</h1>
          <p>{t.intro}</p>
        </div>

        <div className="vh-projectIndex" aria-label="Featured project index">
          {projects.map((project, index) => (
            <a
              className={`vh-projectLine ${activeProject === index ? "is-current" : ""}`}
              href="#projects"
              key={project.title}
              onFocus={() => setActiveProject(index)}
              onMouseEnter={() => setActiveProject(index)}
            >
              <span className="vh-projectYear">{project.year} /</span>
              <span className="vh-projectName">
                {project.displayTitle.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </a>
          ))}
        </div>

        <div className="vh-previewCard" aria-hidden="true">
          <img src={projects[activeProject].image} alt="" />
        </div>

        <div className="vh-bottomMeta">
          <p>
            Studio of Yago Carvalho
            <br />
            {t.role}
          </p>
          <p>
            {t.location}
            <br />
            {t.availability}
          </p>
          <a href="https://github.com/YagoACarvalho" target="_blank" rel="noreferrer">
            {t.email}
          </a>
        </div>
      </section>

      <section className="vh-section vh-about" id="about" data-section>
        <div className="vh-sectionLabel">01 — {t.about}</div>

        <div className="vh-aboutLead">
          <h2>{t.aboutLead}</h2>
          <p>{t.about1}</p>
          <p>{t.about2}</p>
        </div>

        <div className="vh-infoPanel">
          <img src={profile} alt="Yago Alves Carvalho" />

          <InfoBlock title={t.statusTitle} items={[t.availability, t.location]} />
          <InfoBlock title={t.servicesTitle} items={services} />
          <InfoBlock title={t.stackTitle} items={stack} />
        </div>
      </section>

      <section className="vh-section" id="experience" data-section>
        <div className="vh-sectionLabel">02 — {t.experience}</div>
        <div className="vh-experienceList">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </section>

      <section className="vh-section" id="projects" data-section>
        <div className="vh-sectionLabel">03 — {t.projects}</div>
        <div className="vh-cases">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              number={String(index + 1).padStart(2, "0")}
              projectLink={t.projectLink}
              privateProject={t.privateProject}
            />
          ))}
        </div>
      </section>

      <section className="vh-section vh-contact" id="contact" data-section>
        <div className="vh-sectionLabel">04 — {t.contact}</div>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a className="vh-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          {t.button}
        </a>
      </section>

      <footer className="vh-footer">
        <span>{t.footer}</span>
        <span>React / Vite / 2026</span>
      </footer>
    </main>
  );
}

function InfoBlock({ title, items }) {
  return (
    <div className="vh-infoBlock">
      <h3>{title} —</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({ year, title, company, description, tags }) {
  return (
    <article className="vh-experienceCard">
      <span>{year}</span>
      <div>
        <h3>{title}</h3>
        <p className="vh-company">{company}</p>
        <p>{description}</p>
        <div className="vh-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  number,
  title,
  image,
  category,
  description,
  tags,
  link,
  projectLink,
  privateProject,
  status,
}) {
  const hasLiveLink = link && link !== "#";

  return (
    <article className="vh-caseCard">
      <div className="vh-caseMedia">
        <img src={image} alt={title} />
      </div>

      <div className="vh-caseContent">
        <div className="vh-caseTopline">
          <span>{number}</span>
          <span>{category}</span>
          {status && <span>{status}</span>}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="vh-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {hasLiveLink ? (
          <a className="vh-caseLink" href={link} target="_blank" rel="noreferrer">
            {projectLink}
          </a>
        ) : (
          <span className="vh-caseLink vh-caseLinkDisabled">{privateProject}</span>
        )}
      </div>
    </article>
  );
}

const css = `
  :root {
    --vh-bg: #4700ff;
    --vh-bg-deep: #240072;
    --vh-ink: #06030b;
    --vh-paper: #f7f4ee;
    --vh-soft: rgba(247, 244, 238, 0.72);
    --vh-muted: rgba(6, 3, 11, 0.56);
    --vh-line: rgba(6, 3, 11, 0.22);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: var(--vh-bg-deep);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--vh-paper);
  }

  ::selection {
    background: var(--vh-paper);
    color: var(--vh-bg);
  }

  .vh-page {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 84% 12%, rgba(247, 244, 238, 0.14), transparent 22rem),
      linear-gradient(135deg, var(--vh-bg) 0%, #5400ff 45%, #3200b8 100%);
    color: var(--vh-ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .vh-noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0.18;
    background-image:
      linear-gradient(rgba(247, 244, 238, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(247, 244, 238, 0.1) 1px, transparent 1px);
    background-size: 72px 72px;
    mix-blend-mode: soft-light;
  }

  .vh-header {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 220px 1fr auto;
    align-items: start;
    gap: 32px;
    padding: 38px 48px;
    color: var(--vh-paper);
    pointer-events: none;
  }

  .vh-header a,
  .vh-header button {
    pointer-events: auto;
  }

  .vh-logo {
    color: var(--vh-paper);
    text-decoration: none;
    font-size: clamp(32px, 4vw, 58px);
    font-weight: 1000;
    letter-spacing: -0.14em;
    line-height: 0.72;
    text-transform: uppercase;
    display: inline-flex;
    flex-direction: column;
    width: max-content;
  }

  .vh-nav {
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;
    padding-top: 18px;
  }

  .vh-nav a {
    color: rgba(247, 244, 238, 0.72);
    text-decoration: none;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 220ms ease;
  }

  .vh-nav a span {
    font-size: 10px;
    opacity: 0.62;
  }

  .vh-nav a::after {
    content: "";
    width: 0;
    height: 2px;
    background: var(--vh-paper);
    transition: width 220ms ease;
  }

  .vh-nav a:hover,
  .vh-nav a.is-active {
    color: var(--vh-paper);
  }

  .vh-nav a.is-active::after,
  .vh-nav a:hover::after {
    width: 34px;
  }

  .vh-lang {
    border: 1px solid rgba(247, 244, 238, 0.6);
    background: rgba(6, 3, 11, 0.1);
    color: var(--vh-paper);
    font-weight: 900;
    border-radius: 999px;
    padding: 11px 15px;
    cursor: pointer;
    backdrop-filter: blur(12px);
  }

  .vh-hero {
    position: relative;
    min-height: 100vh;
    padding: 190px 48px 48px;
    display: grid;
    grid-template-columns: minmax(260px, 0.7fr) minmax(460px, 1.3fr);
    gap: 48px;
    align-items: center;
    z-index: 2;
  }

  .vh-heroIntro {
    align-self: start;
    padding-top: 18vh;
    max-width: 440px;
    color: var(--vh-paper);
  }

  .vh-heroIntro p:first-child {
    margin: 0 0 28px;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .vh-heroIntro h1 {
    margin: 0 0 22px;
    font-size: clamp(36px, 6vw, 84px);
    line-height: 0.88;
    letter-spacing: -0.09em;
    text-transform: uppercase;
  }

  .vh-heroIntro p:last-child {
    margin: 0;
    max-width: 360px;
    color: rgba(247, 244, 238, 0.8);
    font-size: clamp(16px, 1.4vw, 22px);
    line-height: 1.25;
  }

  .vh-projectIndex {
    position: relative;
    z-index: 3;
    padding-top: 4vh;
    margin-left: auto;
    width: min(800px, 100%);
  }

  .vh-projectLine {
    color: var(--vh-ink);
    text-decoration: none;
    display: grid;
    grid-template-columns: 88px 1fr;
    align-items: start;
    gap: 16px;
    margin: -0.25vw 0;
    width: 100%;
    opacity: 0.76;
    transition: transform 220ms ease, opacity 220ms ease, color 220ms ease;
  }

  .vh-projectLine:hover,
  .vh-projectLine.is-current {
    opacity: 1;
    transform: translateX(-16px);
    color: var(--vh-paper);
  }

  .vh-projectYear {
    font-size: 12px;
    font-weight: 1000;
    letter-spacing: -0.06em;
    padding-top: 1.2vw;
  }

  .vh-projectName {
    display: flex;
    flex-direction: column;
    font-size: clamp(66px, 9.9vw, 178px);
    font-weight: 1000;
    line-height: 0.69;
    letter-spacing: -0.12em;
    text-transform: uppercase;
  }

  .vh-previewCard {
    position: absolute;
    z-index: 2;
    right: 7vw;
    bottom: 13vh;
    width: min(34vw, 460px);
    height: min(42vh, 430px);
    overflow: hidden;
    transform: rotate(-3deg);
    border: 2px solid rgba(247, 244, 238, 0.55);
    box-shadow: 0 30px 80px rgba(6, 3, 11, 0.32);
    mix-blend-mode: multiply;
    opacity: 0.6;
  }

  .vh-previewCard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.35);
  }

  .vh-bottomMeta {
    position: absolute;
    left: 48px;
    right: 48px;
    bottom: 42px;
    display: grid;
    grid-template-columns: 210px 240px 1fr;
    gap: 32px;
    color: var(--vh-paper);
    font-size: 13px;
    line-height: 1.35;
    z-index: 4;
  }

  .vh-bottomMeta p {
    margin: 0;
  }

  .vh-bottomMeta a {
    color: var(--vh-paper);
    text-decoration: none;
    justify-self: end;
  }

  .vh-section {
    position: relative;
    z-index: 2;
    width: min(1280px, calc(100% - 96px));
    margin: 0 auto;
    padding: 140px 0;
    border-top: 1px solid rgba(247, 244, 238, 0.32);
    scroll-margin-top: 120px;
  }

  .vh-sectionLabel {
    color: var(--vh-paper);
    font-size: 12px;
    font-weight: 1000;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 48px;
  }

  .vh-about {
    display: grid;
    grid-template-columns: 0.95fr 1.35fr 0.8fr;
    gap: 54px;
  }

  .vh-about .vh-sectionLabel {
    margin: 0;
  }

  .vh-aboutLead h2 {
    margin: 0 0 28px;
    color: var(--vh-paper);
    font-size: clamp(32px, 4.6vw, 76px);
    line-height: 0.94;
    letter-spacing: -0.08em;
    text-transform: uppercase;
  }

  .vh-aboutLead p {
    max-width: 680px;
    margin: 0 0 20px;
    color: rgba(247, 244, 238, 0.78);
    font-size: 18px;
    line-height: 1.55;
  }

  .vh-infoPanel {
    align-self: start;
    display: grid;
    gap: 30px;
    color: var(--vh-paper);
  }

  .vh-infoPanel img {
    width: 112px;
    height: 112px;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(1) contrast(1.2);
    border: 2px solid rgba(247, 244, 238, 0.72);
  }

  .vh-infoBlock h3 {
    margin: 0 0 12px;
    font-size: 12px;
    font-weight: 1000;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .vh-infoBlock ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 6px;
  }

  .vh-infoBlock li {
    color: rgba(247, 244, 238, 0.78);
    font-size: 13px;
    line-height: 1.35;
  }

  .vh-experienceList {
    display: grid;
    gap: 0;
  }

  .vh-experienceCard {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 46px;
    padding: 36px 0;
    border-top: 1px solid rgba(247, 244, 238, 0.26);
    color: var(--vh-paper);
  }

  .vh-experienceCard:last-child {
    border-bottom: 1px solid rgba(247, 244, 238, 0.26);
  }

  .vh-experienceCard > span {
    font-size: 13px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  .vh-experienceCard h3 {
    margin: 0 0 8px;
    font-size: clamp(28px, 3.2vw, 48px);
    line-height: 0.95;
    letter-spacing: -0.07em;
    text-transform: uppercase;
  }

  .vh-company {
    margin: 0 0 14px !important;
    color: var(--vh-paper) !important;
    font-weight: 800;
  }

  .vh-experienceCard p,
  .vh-caseContent p,
  .vh-contact p {
    margin: 0;
    color: rgba(247, 244, 238, 0.74);
    font-size: 16px;
    line-height: 1.55;
    max-width: 720px;
  }

  .vh-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 22px;
  }

  .vh-tags span {
    color: var(--vh-paper);
    border: 1px solid rgba(247, 244, 238, 0.42);
    border-radius: 999px;
    padding: 7px 11px;
    font-size: 12px;
    font-weight: 900;
  }

  .vh-cases {
    display: grid;
    gap: 80px;
  }

  .vh-caseCard {
    display: grid;
    grid-template-columns: minmax(280px, 0.9fr) minmax(320px, 1.1fr);
    gap: 46px;
    align-items: center;
    padding: 0 0 80px;
    border-bottom: 1px solid rgba(247, 244, 238, 0.26);
  }

  .vh-caseMedia {
    overflow: hidden;
    min-height: 360px;
    background: var(--vh-ink);
    clip-path: polygon(0 0, 100% 0, 100% 82%, 87% 100%, 0 100%);
  }

  .vh-caseMedia img {
    width: 100%;
    height: 100%;
    min-height: 360px;
    object-fit: cover;
    display: block;
    filter: grayscale(1) contrast(1.15);
    mix-blend-mode: luminosity;
    opacity: 0.82;
    transition: transform 420ms ease, filter 420ms ease, opacity 420ms ease;
  }

  .vh-caseCard:hover .vh-caseMedia img {
    transform: scale(1.05);
    filter: grayscale(0) contrast(1);
    opacity: 1;
  }

  .vh-caseTopline {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 18px;
    color: var(--vh-paper);
    font-size: 12px;
    font-weight: 1000;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .vh-caseContent h3 {
    margin: 0 0 22px;
    color: var(--vh-ink);
    font-size: clamp(48px, 7vw, 112px);
    line-height: 0.78;
    letter-spacing: -0.11em;
    text-transform: uppercase;
  }

  .vh-caseLink {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 26px;
    color: var(--vh-paper);
    text-decoration: none;
    font-size: 13px;
    font-weight: 1000;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--vh-paper);
    padding-bottom: 8px;
  }

  .vh-caseLink::after {
    content: "→";
  }

  .vh-caseLinkDisabled {
    opacity: 0.72;
    border-bottom-style: dotted;
  }

  .vh-contact {
    min-height: 72vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .vh-contact h2 {
    margin: 0 0 26px;
    color: var(--vh-paper);
    max-width: 920px;
    font-size: clamp(62px, 11vw, 184px);
    line-height: 0.72;
    letter-spacing: -0.13em;
    text-transform: uppercase;
  }

  .vh-contact p {
    max-width: 600px;
  }

  .vh-cta {
    width: max-content;
    margin-top: 34px;
    color: var(--vh-ink);
    background: var(--vh-paper);
    text-decoration: none;
    font-size: 13px;
    font-weight: 1000;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 17px 22px;
    border: 2px solid var(--vh-paper);
    transition: transform 220ms ease, background 220ms ease, color 220ms ease;
  }

  .vh-cta:hover {
    transform: translateY(-4px);
    background: transparent;
    color: var(--vh-paper);
  }

  .vh-footer {
    position: relative;
    z-index: 2;
    width: min(1280px, calc(100% - 96px));
    margin: 0 auto;
    padding: 28px 0 42px;
    border-top: 1px solid rgba(247, 244, 238, 0.32);
    display: flex;
    justify-content: space-between;
    gap: 24px;
    color: rgba(247, 244, 238, 0.72);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  @media (max-width: 980px) {
    .vh-header {
      grid-template-columns: 1fr auto;
      padding: 26px 22px;
    }

    .vh-nav {
      display: none;
    }

    .vh-hero {
      grid-template-columns: 1fr;
      padding: 152px 22px 132px;
      gap: 40px;
    }

    .vh-heroIntro {
      padding-top: 0;
    }

    .vh-projectIndex {
      width: 100%;
      margin-left: 0;
    }

    .vh-projectLine {
      grid-template-columns: 60px 1fr;
      transform: none !important;
    }

    .vh-projectName {
      font-size: clamp(64px, 20vw, 136px);
    }

    .vh-previewCard {
      position: relative;
      right: auto;
      bottom: auto;
      width: min(100%, 520px);
      height: 300px;
      transform: rotate(-2deg);
      margin-top: -10px;
    }

    .vh-bottomMeta {
      left: 22px;
      right: 22px;
      bottom: 28px;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .vh-bottomMeta a {
      justify-self: start;
    }

    .vh-section,
    .vh-footer {
      width: calc(100% - 44px);
    }

    .vh-about,
    .vh-experienceCard,
    .vh-caseCard {
      grid-template-columns: 1fr;
    }

    .vh-about .vh-sectionLabel {
      margin-bottom: 8px;
    }

    .vh-caseMedia,
    .vh-caseMedia img {
      min-height: 280px;
    }

    .vh-caseContent h3 {
      color: var(--vh-paper);
    }
  }

  @media (max-width: 640px) {
    .vh-logo {
      font-size: 34px;
    }

    .vh-lang {
      padding: 9px 12px;
    }

    .vh-heroIntro h1 {
      font-size: 48px;
    }

    .vh-projectYear {
      padding-top: 12px;
    }

    .vh-projectName {
      letter-spacing: -0.1em;
    }

    .vh-section {
      padding: 96px 0;
    }

    .vh-aboutLead h2,
    .vh-contact h2 {
      letter-spacing: -0.1em;
    }

    .vh-cases {
      gap: 58px;
    }

    .vh-caseCard {
      padding-bottom: 58px;
      gap: 26px;
    }

    .vh-footer {
      flex-direction: column;
    }
  }
`;

export default App;
