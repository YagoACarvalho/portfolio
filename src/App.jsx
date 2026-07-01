import { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import caioCarvalho from "./assets/caio-carvalho.png";
import whatsappAgent from "./assets/whatsapp-agent.png";
import serviceHub from "./assets/servicehub-api.png";
import work1 from "./assets/work1.png";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [lang, setLang] = useState("pt");

  const whatsappNumber = "5524981182297";

  const content = {
    pt: {
      role: "Desenvolvedor Full Stack & Automation Builder",
      heroLabel: "Portfólio / Brasil / 2026",
      heroTitle: "Eu construo produtos digitais com lógica de negócio.",
      description:
        "Sites, sistemas web e automações conectadas a problemas reais — do layout à integração, do lead ao banco de dados.",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      available: "Disponível para projetos",
      viewProjects: "Ver projetos",
      talk: "Falar no WhatsApp",
      stackLabel: "Stack atual",
      profileNote:
        "Software Engineering student building real-world products with front-end, back-end and automation workflows.",
      aboutTitle: "Não é só código bonito. É produto funcionando.",
      about1:
        "Sou desenvolvedor com foco em transformar ideias em aplicações práticas: landing pages, dashboards, integrações, APIs, automações e fluxos inteligentes para negócios.",
      about2:
        "Meu diferencial está em conectar desenvolvimento com operação. Gosto de construir interfaces boas de usar, mas também pensar no que acontece depois do clique: dados, automações, atendimento, CRM e processos.",
      experienceIntro:
        "Minha base mistura desenvolvimento web, automação, estudo formal em engenharia de software e projetos reais.",
      projectsIntro:
        "Projetos selecionados com foco em clareza, execução e solução de problemas reais.",
      contactTitle: "Tem uma ideia, operação ou produto para tirar do papel?",
      contactText:
        "Estou aberto para projetos, parcerias e oportunidades em desenvolvimento web, automações e criação de soluções digitais.",
      projectLink: "Abrir projeto",
      privateProject: "Fluxo privado",
      inProgress: "Em desenvolvimento",
    },
    en: {
      role: "Full Stack Developer & Automation Builder",
      heroLabel: "Portfolio / Brazil / 2026",
      heroTitle: "I build digital products with business logic.",
      description:
        "Websites, web systems and automations connected to real problems — from layout to integration, from lead to database.",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      available: "Available for projects",
      viewProjects: "View projects",
      talk: "Message me on WhatsApp",
      stackLabel: "Current stack",
      profileNote:
        "Software Engineering student building real-world products with front-end, back-end and automation workflows.",
      aboutTitle: "Not just clean code. Working products.",
      about1:
        "I am a developer focused on turning ideas into practical applications: landing pages, dashboards, integrations, APIs, automations and intelligent workflows for businesses.",
      about2:
        "My edge is connecting development with operations. I like building interfaces that feel good to use, but I also think about what happens after the click: data, automation, support, CRM and processes.",
      experienceIntro:
        "My foundation combines web development, automation, software engineering studies and real projects.",
      projectsIntro:
        "Selected projects focused on clarity, execution and real problem solving.",
      contactTitle: "Have an idea, operation or product to build?",
      contactText:
        "I am open to projects, partnerships and opportunities in web development, automation and digital solutions.",
      projectLink: "Open project",
      privateProject: "Private workflow",
      inProgress: "In progress",
    },
  };

  const t = content[lang];

  const whatsappMessage =
    lang === "pt"
      ? "Olá, Yago! Vim pelo seu portfólio e gostaria de conversar sobre um projeto."
      : "Hi, Yago! I found your portfolio and would like to talk about a project.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const navItems = [
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "contact", label: t.contact },
  ];

  const stack = [
    "React",
    "JavaScript",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "n8n",
    "Redis",
    "APIs",
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
          : "Development of websites, landing pages, web systems, automations, API integrations, and digital solutions for real businesses.",
      tags: ["React", "JavaScript", "n8n", "Supabase", "APIs"],
    },
    {
      year: "2024 — Atual",
      title: "Software Engineering Student",
      company: "UniCesumar",
      description:
        lang === "pt"
          ? "Formação em Engenharia de Software, com foco em programação, banco de dados, orientação a objetos e desenvolvimento de sistemas."
          : "Software Engineering degree focused on programming, databases, object-oriented programming, and system development.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
  ];

  const projects = [
    {
      title: "Caio Carvalho Advocacia",
      image: caioCarvalho,
      category: "Web Project",
      description:
        lang === "pt"
          ? "Site institucional desenvolvido para um advogado, com identidade visual sóbria, layout premium, navegação por áreas de atuação e chamadas estratégicas para WhatsApp."
          : "Institutional website developed for a lawyer, featuring a sober visual identity, premium layout, practice-area navigation, and strategic WhatsApp calls to action.",
      tags: ["React", "Vercel", "UI Design", "Responsive"],
      link: "https://caiocarvalhoadv.vercel.app/",
    },
    {
      title: "Work1 — Service Marketplace",
      image: work1,
      category: "Full Stack Platform",
      status: true,
      description:
        lang === "pt"
          ? "Plataforma web para conectar clientes e prestadores locais, com frontend em React e automações via n8n para processamento, armazenamento e distribuição inteligente dos leads."
          : "Web platform connecting clients with local service providers, using React on the frontend and n8n workflows for processing, storage and intelligent lead distribution.",
      tags: ["React", "n8n", "Supabase", "Automation", "Marketplace"],
      link: "https://workonejobs.vercel.app/",
    },
    {
      title: "WhatsApp Intelligent Agent",
      image: whatsappAgent,
      category: "Automation & AI",
      description:
        lang === "pt"
          ? "Sistema de atendimento automatizado com agente inteligente para qualificação de leads via WhatsApp, controle anti-loop, fila de lembretes e organização por nível de interesse."
          : "Automated support system with an intelligent agent for WhatsApp lead qualification, anti-loop control, reminder queue and lead organization by interest level.",
      tags: [
        "n8n",
        "Redis",
        "LangChain",
        "Supabase",
        "MySQL",
        "Evolution API",
        "JavaScript",
      ],
      link: "#",
    },
    {
      title: "ServiceHub API",
      image: serviceHub,
      category: "Backend API",
      status: true,
      description:
        lang === "pt"
          ? "API backend para marketplace de serviços, responsável por gerenciar usuários, prestadores e solicitações com arquitetura REST e foco em organização de código."
          : "Backend API for a service marketplace, managing users, providers and service requests with REST architecture and clean code structure.",
      tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      link: "https://github.com/YagoACarvalho/ServiceHubAPIs",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

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
    <main className="portfolio-page">
      <style>{portfolioStyles}</style>

      <div className="background-grid" />
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <header className="topbar">
        <a className="brand" href="#about" aria-label="Go to hero section">
          <span className="brand-mark">YC</span>
          <span className="brand-text">Yago Carvalho</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lang-button"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>
      </header>

      <div className="shell">
        <section id="about" className="hero section-anchor">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroLabel}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.viewProjects}
              </a>
              <a
                className="button button-secondary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {t.talk}
              </a>
            </div>

            <div className="stack-panel">
              <span>{t.stackLabel}</span>
              <div className="stack-list">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="identity-card">
            <div className="profile-frame">
              <img src={profile} alt="Yago Alves Carvalho" />
            </div>

            <div className="identity-content">
              <span className="status-pill">{t.available}</span>
              <h2>Yago Alves Carvalho</h2>
              <p>{t.role}</p>
              <small>{t.profileNote}</small>
            </div>

            <div className="mini-metrics">
              <div>
                <strong>04</strong>
                <span>selected projects</span>
              </div>
              <div>
                <strong>08+</strong>
                <span>tools in stack</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span>01</span>
            <h2>{t.about}</h2>
          </div>

          <div className="text-block">
            <h3>{t.aboutTitle}</h3>
            <p>{t.about1}</p>
            <p>{t.about2}</p>
          </div>
        </section>

        <section id="experience" className="content-section section-anchor">
          <div className="section-heading">
            <span>02</span>
            <h2>{t.experience}</h2>
          </div>

          <p className="section-intro">{t.experienceIntro}</p>

          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>
        </section>

        <section id="projects" className="content-section section-anchor">
          <div className="section-heading">
            <span>03</span>
            <h2>{t.projects}</h2>
          </div>

          <p className="section-intro">{t.projectsIntro}</p>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index + 1}
                projectLink={t.projectLink}
                privateProject={t.privateProject}
                inProgress={t.inProgress}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <span>04 / {t.contact}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>

          <a
            className="button button-primary"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {t.talk}
          </a>
        </section>
      </div>
    </main>
  );
}

function ExperienceCard({ year, title, company, description, tags }) {
  return (
    <article className="experience-card">
      <span>{year}</span>
      <div>
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p>{description}</p>

        <div className="tags">
          {tags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  title,
  image,
  category,
  description,
  tags,
  link,
  index,
  projectLink,
  privateProject,
  status,
  inProgress,
}) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img src={image} alt={title} />
        <span className="project-number">{String(index).padStart(2, "0")}</span>
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span>{category}</span>
          {status && <small>{inProgress}</small>}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tags">
          {tags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>

        {link && link !== "#" ? (
          <a className="project-link" href={link} target="_blank" rel="noreferrer">
            {projectLink}
          </a>
        ) : (
          <span className="project-link muted">{privateProject}</span>
        )}
      </div>
    </article>
  );
}

const portfolioStyles = `
  :root {
    --bg: #050608;
    --panel: rgba(255, 255, 255, 0.045);
    --panel-strong: rgba(255, 255, 255, 0.075);
    --line: rgba(255, 255, 255, 0.11);
    --text: #f4f0e8;
    --muted: #a7a29a;
    --soft: #6f6b64;
    --accent: #d6ff62;
    --accent-soft: rgba(214, 255, 98, 0.16);
    --radius: 28px;
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

  .portfolio-page {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 12%, rgba(214, 255, 98, 0.08), transparent 26%),
      radial-gradient(circle at 88% 8%, rgba(104, 145, 255, 0.08), transparent 28%),
      var(--bg);
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .background-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.24;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: linear-gradient(to bottom, black, transparent 78%);
  }

  .background-glow {
    position: fixed;
    width: 360px;
    height: 360px;
    border-radius: 999px;
    filter: blur(110px);
    pointer-events: none;
    opacity: 0.24;
  }

  .background-glow-one {
    top: 22%;
    left: -120px;
    background: #d6ff62;
  }

  .background-glow-two {
    right: -140px;
    bottom: 12%;
    background: #6c8cff;
  }

  .topbar {
    width: min(1180px, calc(100% - 40px));
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 10px 10px 10px 14px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(5, 6, 8, 0.62);
    backdrop-filter: blur(22px);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
    text-decoration: none;
    font-weight: 800;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--accent);
    color: #111;
    font-size: 13px;
    letter-spacing: -0.04em;
  }

  .brand-text {
    font-size: 14px;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
  }

  .nav-link {
    color: var(--muted);
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
    padding: 9px 14px;
    border-radius: 999px;
    transition: 180ms ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #111;
    background: var(--accent);
  }

  .lang-button {
    width: 46px;
    height: 46px;
    border: 1px solid var(--line);
    border-radius: 50%;
    background: var(--panel);
    color: var(--text);
    font-weight: 900;
    cursor: pointer;
    transition: 180ms ease;
  }

  .lang-button:hover {
    border-color: rgba(214, 255, 98, 0.7);
    color: var(--accent);
  }

  .shell {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .section-anchor {
    scroll-margin-top: 110px;
  }

  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
    gap: 56px;
    align-items: center;
    padding: 148px 0 88px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 24px;
    color: var(--accent);
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .eyebrow::before {
    content: "";
    width: 36px;
    height: 1px;
    background: var(--accent);
  }

  .hero h1 {
    max-width: 820px;
    margin: 0;
    color: var(--text);
    font-size: clamp(54px, 8.8vw, 112px);
    line-height: 0.88;
    letter-spacing: -0.085em;
  }

  .hero-description {
    max-width: 660px;
    margin: 30px 0 0;
    color: var(--muted);
    font-size: clamp(18px, 2.2vw, 23px);
    line-height: 1.45;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 36px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 20px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 900;
    font-size: 14px;
    transition: 180ms ease;
  }

  .button-primary {
    background: var(--accent);
    color: #111;
    border: 1px solid var(--accent);
  }

  .button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 50px rgba(214, 255, 98, 0.16);
  }

  .button-secondary {
    color: var(--text);
    border: 1px solid var(--line);
    background: var(--panel);
  }

  .button-secondary:hover {
    border-color: rgba(255, 255, 255, 0.24);
    transform: translateY(-2px);
  }

  .stack-panel {
    max-width: 680px;
    margin-top: 48px;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: linear-gradient(135deg, var(--panel), rgba(255, 255, 255, 0.02));
  }

  .stack-panel > span {
    display: block;
    margin-bottom: 14px;
    color: var(--soft);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .stack-list,
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .stack-list span,
  .tags small {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0 11px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.045);
    color: #d7d2ca;
    font-size: 12px;
    font-weight: 800;
  }

  .identity-card {
    position: relative;
    align-self: center;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.035)),
      rgba(255, 255, 255, 0.04);
    padding: 14px;
    box-shadow: 0 24px 90px rgba(0, 0, 0, 0.38);
  }

  .identity-card::before {
    content: "";
    position: absolute;
    inset: 14px;
    border: 1px solid rgba(214, 255, 98, 0.22);
    border-radius: 22px;
    pointer-events: none;
  }

  .profile-frame {
    height: 470px;
    border-radius: 22px;
    overflow: hidden;
    background: #101010;
  }

  .profile-frame img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: saturate(0.94) contrast(1.04);
  }

  .identity-content {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 92px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 20px;
    background: rgba(5, 6, 8, 0.72);
    backdrop-filter: blur(18px);
  }

  .status-pill {
    display: inline-flex;
    margin-bottom: 14px;
    padding: 7px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .identity-content h2 {
    margin: 0;
    font-size: 28px;
    letter-spacing: -0.05em;
  }

  .identity-content p {
    margin: 7px 0 12px;
    color: var(--muted);
    font-weight: 700;
  }

  .identity-content small {
    color: #c8c1b6;
    line-height: 1.55;
  }

  .mini-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 14px;
  }

  .mini-metrics div {
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.045);
  }

  .mini-metrics strong {
    display: block;
    color: var(--accent);
    font-size: 28px;
    line-height: 1;
  }

  .mini-metrics span {
    display: block;
    margin-top: 6px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .content-section {
    padding: 112px 0;
    border-top: 1px solid var(--line);
  }

  .section-heading {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 22px;
    align-items: start;
    margin-bottom: 34px;
  }

  .section-heading span {
    color: var(--accent);
    font-size: 13px;
    font-weight: 900;
  }

  .section-heading h2 {
    margin: 0;
    font-size: clamp(36px, 5vw, 72px);
    line-height: 0.9;
    letter-spacing: -0.065em;
  }

  .section-intro {
    max-width: 660px;
    margin: 0 0 34px 94px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.65;
  }

  .text-block {
    margin-left: 94px;
    max-width: 850px;
    display: grid;
    gap: 22px;
  }

  .text-block h3 {
    margin: 0;
    max-width: 780px;
    font-size: clamp(28px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.055em;
  }

  .text-block p {
    margin: 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.75;
  }

  .experience-list {
    margin-left: 94px;
    display: grid;
    gap: 16px;
  }

  .experience-card {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 26px;
    padding: 26px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: var(--panel);
    transition: 180ms ease;
  }

  .experience-card:hover,
  .project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(214, 255, 98, 0.35);
    background: var(--panel-strong);
  }

  .experience-card > span {
    color: var(--soft);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .experience-card h3,
  .project-card h3 {
    margin: 0;
    font-size: 23px;
    letter-spacing: -0.035em;
  }

  .experience-card p,
  .project-card p {
    margin: 12px 0 18px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }

  .experience-card .company {
    margin: 8px 0 0;
    color: #d7d2ca;
    font-weight: 800;
  }

  .project-grid {
    display: grid;
    gap: 20px;
  }

  .project-card {
    display: grid;
    grid-template-columns: minmax(270px, 0.9fr) minmax(0, 1.1fr);
    min-height: 360px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--panel);
    overflow: hidden;
    transition: 180ms ease;
  }

  .project-visual {
    min-height: 360px;
    position: relative;
    overflow: hidden;
    background: #111;
  }

  .project-visual img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: 240ms ease;
  }

  .project-card:hover .project-visual img {
    transform: scale(1.04);
  }

  .project-number {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(5, 6, 8, 0.72);
    color: var(--accent);
    border: 1px solid rgba(214, 255, 98, 0.28);
    font-weight: 900;
    backdrop-filter: blur(12px);
  }

  .project-body {
    padding: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 18px;
  }

  .project-meta span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .project-meta small {
    padding: 7px 10px;
    border: 1px solid rgba(214, 255, 98, 0.22);
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }

  .project-link {
    width: fit-content;
    margin-top: 22px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 900;
    border-bottom: 1px solid rgba(214, 255, 98, 0.35);
  }

  .project-link.muted {
    color: var(--soft);
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }

  .contact-section {
    margin: 60px 0 110px;
    padding: clamp(34px, 6vw, 74px);
    border: 1px solid rgba(214, 255, 98, 0.24);
    border-radius: 34px;
    background:
      radial-gradient(circle at top right, rgba(214, 255, 98, 0.16), transparent 34%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035));
  }

  .contact-section span {
    color: var(--accent);
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .contact-section h2 {
    max-width: 760px;
    margin: 18px 0;
    font-size: clamp(38px, 6vw, 80px);
    line-height: 0.92;
    letter-spacing: -0.07em;
  }

  .contact-section p {
    max-width: 640px;
    margin: 0 0 30px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .desktop-nav {
      display: none;
    }

    .brand-text {
      display: none;
    }

    .topbar {
      width: calc(100% - 24px);
      top: 12px;
    }

    .shell {
      width: calc(100% - 28px);
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 34px;
      padding-top: 118px;
    }

    .hero h1 {
      font-size: clamp(52px, 16vw, 86px);
    }

    .profile-frame {
      height: 420px;
    }

    .section-heading,
    .experience-card,
    .project-card {
      grid-template-columns: 1fr;
    }

    .section-intro,
    .text-block,
    .experience-list {
      margin-left: 0;
    }

    .content-section {
      padding: 78px 0;
    }

    .project-visual {
      min-height: 260px;
    }
  }

  @media (max-width: 560px) {
    .hero-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .button {
      width: 100%;
    }

    .identity-content {
      position: relative;
      left: auto;
      right: auto;
      bottom: auto;
      margin-top: 12px;
    }

    .profile-frame {
      height: 340px;
    }

    .mini-metrics {
      grid-template-columns: 1fr;
    }

    .project-body,
    .experience-card {
      padding: 22px;
    }

    .project-meta {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

export default App;
