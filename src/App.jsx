import { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import caioCarvalho from "./assets/caio-carvalho.png";
import whatsappAgent from "./assets/whatsapp-agent.png";
import serviceHub from "./assets/servicehub-api.png";
import work1 from "./assets/work1.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");
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
      role: "Desenvolvedor Full Stack",
      eyebrow: "Front-end / Automações / Produtos digitais",
      description:
        "Construo aplicações modernas, automações inteligentes e soluções digitais com foco em performance, usabilidade e resultado.",
      home: "Início",
      expertise: "Expertise",
      work: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      heroTitleA: "Yago Alves",
      heroTitleB: "Carvalho",
      heroText:
        "Transformo ideias em interfaces, sistemas e fluxos automatizados que resolvem problemas reais para negócios reais.",
      about1:
        "Sou desenvolvedor com interesse em criar sistemas que resolvem problemas reais. Gosto de transformar ideias em produtos digitais funcionais, desde landing pages e dashboards até integrações com APIs, automações e bancos de dados.",
      about2:
        "Atualmente venho desenvolvendo projetos com React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n e integrações com WhatsApp.",
      selectedWork: "Trabalhos selecionados",
      workIntro:
        "Uma seleção de projetos web, APIs e automações criadas com foco em utilidade, clareza e execução.",
      contactText:
        "Estou aberto para projetos, parcerias e oportunidades na área de desenvolvimento, automação e criação de soluções digitais.",
      button: "Falar no WhatsApp",
      projectLink: "Ver projeto",
      featured: "Projeto em destaque",
      inProgress: "Em desenvolvimento",
      quote:
        "Meu foco é simples: criar soluções que funcionam bem, parecem profissionais e fazem sentido para o negócio.",
      availability: "Disponível para projetos selecionados",
    },
    en: {
      role: "Full Stack Developer",
      eyebrow: "Front-end / Automations / Digital products",
      description:
        "I build modern applications, smart automations, and digital solutions focused on performance, usability, and results.",
      home: "Home",
      expertise: "Expertise",
      work: "Work",
      experience: "Experience",
      contact: "Contact",
      heroTitleA: "Yago Alves",
      heroTitleB: "Carvalho",
      heroText:
        "I turn ideas into interfaces, systems, and automated workflows that solve real problems for real businesses.",
      about1:
        "I am a developer interested in building systems that solve real problems. I like turning ideas into functional digital products, from landing pages and dashboards to API integrations, automations, and databases.",
      about2:
        "I currently build projects with React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n, and WhatsApp integrations.",
      selectedWork: "Selected work",
      workIntro:
        "A selection of web projects, APIs, and automations built with utility, clarity, and execution in mind.",
      contactText:
        "I am open to projects, partnerships, and opportunities in development, automation, and digital solutions.",
      button: "Message me on WhatsApp",
      projectLink: "View project",
      featured: "Featured project",
      inProgress: "In progress",
      quote:
        "My focus is simple: build solutions that work well, look professional, and make sense for the business.",
      availability: "Available for selected projects",
    },
  };

  const t = content[lang];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function handleScroll() {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
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

  const navItems = [
    { id: "home", label: t.home },
    { id: "expertise", label: t.expertise },
    { id: "work", label: t.work },
    { id: "experience", label: t.experience },
    { id: "contact", label: t.contact },
  ];

  const expertise = [
    {
      number: "01",
      title: lang === "pt" ? "Software" : "Software",
      subtitle: lang === "pt" ? "Development" : "Development",
      description:
        lang === "pt"
          ? "Criação de sistemas web, dashboards, APIs e produtos digitais com estrutura limpa e foco em evolução."
          : "Development of web systems, dashboards, APIs, and digital products with clean structure and room to scale.",
      stack: ["React", "JavaScript", "Java", "Spring Boot"],
    },
    {
      number: "02",
      title: "Frontend",
      subtitle: lang === "pt" ? "UI Engineering" : "UI Engineering",
      description:
        lang === "pt"
          ? "Interfaces responsivas com atenção a hierarquia visual, performance e experiência de uso."
          : "Responsive interfaces with attention to visual hierarchy, performance, and user experience.",
      stack: ["React", "Vite", "Tailwind", "Vercel"],
    },
    {
      number: "03",
      title: lang === "pt" ? "Automação" : "Automation",
      subtitle: lang === "pt" ? "AI Workflows" : "AI Workflows",
      description:
        lang === "pt"
          ? "Fluxos inteligentes com WhatsApp, CRM, bancos de dados, agentes e integrações entre ferramentas."
          : "Smart workflows with WhatsApp, CRM, databases, agents, and tool integrations.",
      stack: ["n8n", "Supabase", "Redis", "APIs"],
    },
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
      location: lang === "pt" ? "Brasil / Remoto" : "Brazil / Remote",
      description:
        lang === "pt"
          ? "Criação de sites, landing pages, sistemas web, automações, integrações com APIs e soluções digitais voltadas para negócios reais."
          : "Development of websites, landing pages, web systems, automations, API integrations, and digital solutions for real businesses.",
      tags: ["React", "JavaScript", "n8n", "Supabase", "APIs"],
    },
    {
      year: "2024 — Atual",
      title:
        lang === "pt"
          ? "Estudante de Engenharia de Software"
          : "Software Engineering Student",
      company: "UniCesumar",
      location: lang === "pt" ? "Graduação" : "Degree program",
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
          : "Institutional website developed for a lawyer, with a sober visual identity, premium layout, practice-area navigation, and strategic WhatsApp calls to action.",
      tags: ["React", "Vercel", "UI Design", "Responsive"],
      link: "https://caiocarvalhoadv.vercel.app/",
    },
    {
      title: "Work1 – Service Marketplace",
      image: work1,
      category: "Full Stack Platform",
      status: true,
      description:
        lang === "pt"
          ? "Plataforma web para conexão entre clientes e prestadores de serviços locais, com frontend em React e automações via n8n para processamento e distribuição dos leads."
          : "Web platform connecting clients with local service providers, with a React frontend and n8n workflows for lead processing and distribution.",
      tags: ["React", "n8n", "Supabase", "Automation", "Marketplace"],
      link: "https://workonejobs.vercel.app/",
    },
    {
      title: "WhatsApp Intelligent Agent",
      image: whatsappAgent,
      category: "Automation & AI",
      description:
        lang === "pt"
          ? "Sistema de atendimento automatizado com agente inteligente para qualificação de leads via WhatsApp, fila de lembretes e controle anti-loop."
          : "Automated customer service system with an intelligent agent for WhatsApp lead qualification, reminder queue, and anti-loop control.",
      tags: ["n8n", "Redis", "LangChain", "Supabase", "Evolution API"],
      link: "#",
    },
    {
      title: "ServiceHub API",
      image: serviceHub,
      category: "Backend API",
      status: true,
      description:
        lang === "pt"
          ? "API backend para marketplace de serviços, responsável por gerenciar usuários, prestadores e solicitações com arquitetura REST."
          : "Backend API for a service marketplace, managing users, providers, and service requests with REST architecture.",
      tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      link: "https://github.com/YagoACarvalho/ServiceHubAPIs",
    },
  ];

  return (
    <main className="portfolio-shell">
      <style>{css}</style>

      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span>Y</span>
          <span>C</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "nav-link active" : "nav-link"}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              // {item.label}
            </a>
          ))}
        </nav>

        <button className="lang-button" onClick={() => setLang(lang === "pt" ? "en" : "pt")}>
          {lang === "pt" ? "EN" : "PT"}
        </button>
      </header>

      <section id="home" className="hero section-block">
        <div className="hero-copy">
          <p className="eyebrow">// {t.eyebrow}</p>
          <h1>
            <span>{t.heroTitleA}</span>
            <span>{t.heroTitleB}</span>
          </h1>
          <h2>{t.role}</h2>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-actions">
            <a href="#work" className="primary-link">
              {t.selectedWork}
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="secondary-link">
              {t.button}
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile summary">
          <div className="portrait-card">
            <img src={profile} alt="Yago Alves Carvalho" />
          </div>
          <div className="availability-card">
            <span className="pulse" />
            {t.availability}
          </div>
          <div className="mini-terminal">
            <p>const builder = &#123;</p>
            <p>&nbsp;&nbsp;stack: ["React", "n8n", "APIs"],</p>
            <p>&nbsp;&nbsp;focus: "real business problems"</p>
            <p>&#125;;</p>
          </div>
        </aside>
      </section>

      <section id="expertise" className="section-block expertise-section">
        <SectionTitle eyebrow="// expertise" title={t.expertise} />

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>
                <span>{item.title}</span>
                <span>{item.subtitle}</span>
              </h3>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <blockquote className="quote-card">“{t.quote}”</blockquote>
      </section>

      <section id="work" className="section-block work-section">
        <div className="work-intro">
          <SectionTitle eyebrow="// work" title={t.selectedWork} />
          <p>{t.workIntro}</p>
        </div>

        <FeaturedProject project={projects[0]} projectLink={t.projectLink} featured={t.featured} />

        <div className="project-list">
          {projects.slice(1).map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              number={String(index + 2).padStart(2, "0")}
              projectLink={t.projectLink}
              inProgress={t.inProgress}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="section-block experience-section">
        <SectionTitle eyebrow="// experience" title={t.experience} />

        <div className="experience-list">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <p className="eyebrow">// contact</p>
        <h2>{t.contactText}</h2>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-button">
          {t.button}
        </a>

        <div className="socials">
          <a href="https://github.com/YagoACarvalho" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function FeaturedProject({ project, projectLink, featured }) {
  return (
    <article className="featured-project">
      <div className="featured-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="featured-content">
        <p className="eyebrow">// {featured}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="project-cta">
          {projectLink} <span>↗</span>
        </a>
      </div>
    </article>
  );
}

function ProjectRow({ project, number, projectLink, inProgress }) {
  return (
    <article className="project-row">
      <span className="project-number">{number}</span>

      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.status && <span>{inProgress}</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row compact">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <a href={project.link} target="_blank" rel="noreferrer" className="row-link">
        {projectLink} ↗
      </a>
    </article>
  );
}

function ExperienceCard({ year, title, company, location, description, tags }) {
  return (
    <article className="experience-card">
      <div className="experience-date">{year}</div>
      <div className="experience-copy">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="location">{location}</p>
        <p className="experience-description">{description}</p>
        <div className="tag-row compact">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

const css = `
  :root {
    --bg: #080808;
    --bg-soft: #101010;
    --text: #f3efe7;
    --muted: #a59f94;
    --line: rgba(243, 239, 231, 0.14);
    --accent: #c6ff41;
    --accent-soft: rgba(198, 255, 65, 0.12);
    --orange: #ff8a3d;
    --max: 1180px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: var(--bg);
  }

  body {
    margin: 0;
    background: var(--bg);
  }

  .portfolio-shell {
    min-height: 100vh;
    background:
      radial-gradient(circle at 10% 0%, rgba(198, 255, 65, 0.08), transparent 32%),
      radial-gradient(circle at 85% 12%, rgba(255, 138, 61, 0.08), transparent 28%),
      linear-gradient(180deg, #080808 0%, #0d0d0d 48%, #080808 100%);
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  .noise {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 1;
    opacity: 0.34;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: linear-gradient(to bottom, black, transparent 90%);
  }

  .orb {
    pointer-events: none;
    position: fixed;
    width: 360px;
    height: 360px;
    border-radius: 999px;
    filter: blur(90px);
    opacity: 0.18;
    z-index: 0;
  }

  .orb-one {
    top: 120px;
    left: -180px;
    background: var(--accent);
  }

  .orb-two {
    right: -160px;
    bottom: 8%;
    background: var(--orange);
  }

  .site-header {
    width: min(var(--max), calc(100% - 48px));
    margin: 0 auto;
    padding: 26px 0;
    position: sticky;
    top: 0;
    z-index: 30;
    display: grid;
    grid-template-columns: 70px 1fr auto;
    align-items: center;
    gap: 24px;
    background: linear-gradient(180deg, rgba(8,8,8,0.94), rgba(8,8,8,0.7) 70%, transparent);
    backdrop-filter: blur(14px);
  }

  .brand {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    color: var(--text);
    text-decoration: none;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 0.9;
    transition: 220ms ease;
  }

  .brand span {
    display: block;
  }

  .brand:hover {
    color: var(--bg);
    background: var(--accent);
    border-color: var(--accent);
    transform: rotate(-4deg);
  }

  .main-nav {
    display: flex;
    justify-content: center;
    gap: 28px;
  }

  .nav-link {
    color: var(--muted);
    text-decoration: none;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
    transition: 220ms ease;
    white-space: nowrap;
  }

  .nav-link span {
    color: rgba(243, 239, 231, 0.34);
    margin-right: 8px;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--accent);
  }

  .lang-button {
    border: 1px solid var(--line);
    color: var(--text);
    background: rgba(255,255,255,0.03);
    min-width: 54px;
    height: 42px;
    font-weight: 800;
    cursor: pointer;
    transition: 220ms ease;
  }

  .lang-button:hover {
    color: var(--bg);
    border-color: var(--accent);
    background: var(--accent);
  }

  .section-block {
    position: relative;
    z-index: 2;
    width: min(var(--max), calc(100% - 48px));
    margin: 0 auto;
    scroll-margin-top: 110px;
  }

  .hero {
    min-height: calc(100vh - 108px);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 70px;
    align-items: center;
    padding: 58px 0 90px;
  }

  .eyebrow {
    margin: 0 0 20px;
    color: var(--accent);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.02em;
  }

  .hero h1 {
    margin: 0;
    font-size: clamp(70px, 11vw, 154px);
    line-height: 0.78;
    letter-spacing: -0.085em;
    text-transform: uppercase;
    max-width: 860px;
  }

  .hero h1 span {
    display: block;
  }

  .hero h2 {
    margin: 34px 0 0;
    color: var(--muted);
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 500;
  }

  .hero-text {
    max-width: 680px;
    margin: 26px 0 0;
    color: var(--text);
    font-size: clamp(20px, 2.6vw, 34px);
    line-height: 1.18;
    letter-spacing: -0.04em;
  }

  .hero-actions {
    margin-top: 42px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .primary-link,
  .secondary-link,
  .contact-button,
  .project-cta,
  .row-link {
    color: var(--text);
    text-decoration: none;
    font-weight: 850;
    transition: 220ms ease;
  }

  .primary-link,
  .secondary-link,
  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 20px;
    border: 1px solid var(--line);
  }

  .primary-link {
    color: var(--bg);
    background: var(--accent);
    border-color: var(--accent);
  }

  .secondary-link:hover,
  .contact-button:hover {
    color: var(--bg);
    background: var(--accent);
    border-color: var(--accent);
  }

  .primary-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 50px rgba(198, 255, 65, 0.18);
  }

  .hero-panel {
    display: grid;
    gap: 14px;
  }

  .portrait-card {
    position: relative;
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
    padding: 14px;
    overflow: hidden;
  }

  .portrait-card::before {
    content: "";
    position: absolute;
    inset: 14px;
    border: 1px solid rgba(198, 255, 65, 0.25);
    z-index: 2;
  }

  .portrait-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1.22;
    object-fit: cover;
    filter: grayscale(0.3) contrast(1.05);
  }

  .availability-card,
  .mini-terminal {
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.03);
  }

  .availability-card {
    padding: 16px;
    color: var(--text);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pulse {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 0 6px rgba(198, 255, 65, 0.12);
  }

  .mini-terminal {
    padding: 18px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.7;
  }

  .mini-terminal p {
    margin: 0;
  }

  .section-title {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 30px;
    align-items: start;
    margin-bottom: 34px;
  }

  .section-title p {
    margin: 14px 0 0;
    color: var(--accent);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
  }

  .section-title h2 {
    margin: 0;
    color: var(--text);
    font-size: clamp(48px, 7vw, 104px);
    line-height: 0.9;
    letter-spacing: -0.08em;
    text-transform: uppercase;
  }

  .expertise-section,
  .work-section,
  .experience-section,
  .contact-section {
    padding: 92px 0;
    border-top: 1px solid var(--line);
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--line);
  }

  .expertise-card {
    min-height: 360px;
    padding: 32px;
    border-right: 1px solid var(--line);
    background: rgba(255,255,255,0.02);
    display: flex;
    flex-direction: column;
  }

  .expertise-card:last-child {
    border-right: none;
  }

  .card-number,
  .project-number {
    color: var(--accent);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
  }

  .expertise-card h3 {
    margin: 50px 0 20px;
    color: var(--text);
    font-size: clamp(30px, 4vw, 48px);
    line-height: 0.95;
    letter-spacing: -0.06em;
  }

  .expertise-card h3 span {
    display: block;
  }

  .expertise-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .tag-row {
    margin-top: auto;
    padding-top: 26px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag-row span {
    border: 1px solid rgba(243, 239, 231, 0.14);
    color: var(--text);
    background: rgba(255,255,255,0.03);
    border-radius: 999px;
    padding: 7px 10px;
    font-size: 12px;
    font-weight: 750;
  }

  .tag-row.compact {
    margin-top: 0;
    padding-top: 10px;
  }

  .quote-card {
    margin: 28px 0 0 auto;
    max-width: 720px;
    border-left: 3px solid var(--accent);
    padding: 24px 0 24px 28px;
    color: var(--text);
    font-size: clamp(24px, 3.2vw, 42px);
    line-height: 1.1;
    letter-spacing: -0.055em;
  }

  .work-intro {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 40px;
    align-items: end;
    margin-bottom: 44px;
  }

  .work-intro .section-title {
    margin-bottom: 0;
  }

  .work-intro p:last-child {
    color: var(--muted);
    font-size: 18px;
    line-height: 1.7;
    margin: 0 0 10px;
  }

  .featured-project {
    border: 1px solid var(--line);
    display: grid;
    grid-template-columns: 55% 45%;
    min-height: 480px;
    background: rgba(255,255,255,0.025);
    margin-bottom: 24px;
  }

  .featured-image {
    min-height: 100%;
    overflow: hidden;
    border-right: 1px solid var(--line);
    background: var(--bg-soft);
  }

  .featured-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform: scale(1.01);
    transition: 420ms ease;
  }

  .featured-project:hover img {
    transform: scale(1.06);
  }

  .featured-content {
    padding: 38px;
    display: flex;
    flex-direction: column;
  }

  .featured-content h3 {
    margin: 0;
    color: var(--text);
    font-size: clamp(38px, 5vw, 72px);
    line-height: 0.9;
    letter-spacing: -0.075em;
  }

  .featured-content p:not(.eyebrow) {
    margin: 24px 0 0;
    color: var(--muted);
    line-height: 1.75;
    font-size: 16px;
  }

  .project-cta {
    margin-top: 30px;
    color: var(--accent);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .project-cta:hover,
  .row-link:hover {
    color: var(--orange);
  }

  .project-list {
    border-top: 1px solid var(--line);
  }

  .project-row {
    display: grid;
    grid-template-columns: 70px 190px minmax(0, 1fr) 120px;
    gap: 24px;
    align-items: center;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .project-thumb {
    height: 120px;
    overflow: hidden;
    background: var(--bg-soft);
    border: 1px solid var(--line);
  }

  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: 320ms ease;
  }

  .project-row:hover .project-thumb img {
    transform: scale(1.07);
  }

  .project-meta {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .project-meta span {
    color: var(--accent);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 12px;
  }

  .project-info h3 {
    margin: 0;
    color: var(--text);
    font-size: clamp(24px, 3vw, 42px);
    line-height: 0.95;
    letter-spacing: -0.06em;
  }

  .project-info p {
    max-width: 650px;
    margin: 12px 0 0;
    color: var(--muted);
    line-height: 1.65;
  }

  .row-link {
    color: var(--text);
    font-size: 14px;
    text-align: right;
  }

  .experience-list {
    border-top: 1px solid var(--line);
  }

  .experience-card {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 34px;
    padding: 34px 0;
    border-bottom: 1px solid var(--line);
  }

  .experience-date {
    color: var(--accent);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
  }

  .experience-copy h3 {
    margin: 0;
    color: var(--text);
    font-size: clamp(28px, 4vw, 54px);
    line-height: 0.95;
    letter-spacing: -0.07em;
  }

  .company {
    margin: 14px 0 0;
    color: var(--text);
    font-weight: 800;
  }

  .location {
    margin: 4px 0 0;
    color: var(--muted);
  }

  .experience-description {
    max-width: 780px;
    margin: 18px 0 0;
    color: var(--muted);
    line-height: 1.75;
  }

  .contact-section {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 120px;
  }

  .contact-section h2 {
    max-width: 980px;
    margin: 0;
    color: var(--text);
    font-size: clamp(44px, 7vw, 104px);
    line-height: 0.95;
    letter-spacing: -0.08em;
  }

  .contact-button {
    width: fit-content;
    margin-top: 34px;
  }

  .socials {
    margin-top: 58px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .socials a {
    color: var(--muted);
    text-decoration: none;
    font-weight: 800;
  }

  .socials a:hover {
    color: var(--accent);
  }

  @media (max-width: 980px) {
    .site-header {
      grid-template-columns: 60px 1fr auto;
    }

    .main-nav {
      justify-content: flex-start;
      overflow-x: auto;
      gap: 18px;
      padding: 8px 0;
    }

    .hero,
    .work-intro,
    .featured-project {
      grid-template-columns: 1fr;
    }

    .hero {
      gap: 42px;
      padding-top: 40px;
    }

    .hero-panel {
      max-width: 420px;
    }

    .expertise-grid {
      grid-template-columns: 1fr;
    }

    .expertise-card {
      min-height: auto;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .expertise-card:last-child {
      border-bottom: 0;
    }

    .featured-image {
      min-height: 320px;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .project-row {
      grid-template-columns: 48px 150px 1fr;
    }

    .row-link {
      grid-column: 3;
      text-align: left;
    }
  }

  @media (max-width: 720px) {
    .site-header,
    .section-block {
      width: min(100% - 32px, var(--max));
    }

    .site-header {
      grid-template-columns: 52px 1fr 48px;
      gap: 12px;
      padding: 18px 0;
    }

    .brand {
      width: 46px;
      height: 46px;
    }

    .nav-link {
      font-size: 12px;
    }

    .nav-link span {
      display: none;
    }

    .hero h1 {
      font-size: clamp(58px, 19vw, 92px);
    }

    .hero-text {
      font-size: 23px;
    }

    .primary-link,
    .secondary-link,
    .contact-button {
      width: 100%;
    }

    .section-title {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .expertise-section,
    .work-section,
    .experience-section,
    .contact-section {
      padding: 70px 0;
    }

    .project-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .project-thumb {
      height: 210px;
    }

    .row-link {
      grid-column: auto;
    }

    .experience-card {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .featured-content,
    .expertise-card {
      padding: 24px;
    }
  }
`;

export default App;
