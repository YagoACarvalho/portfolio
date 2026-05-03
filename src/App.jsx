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
      description:
        "Construo aplicações modernas, automações inteligentes e soluções digitais com foco em performance, usabilidade e resultado.",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      about1:
        "Sou desenvolvedor com interesse em criar sistemas que resolvem problemas reais. Gosto de transformar ideias em produtos digitais funcionais, desde landing pages e dashboards até integrações com APIs, automações e bancos de dados.",
      about2:
        "Atualmente venho desenvolvendo projetos com React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n e integrações com WhatsApp.",
      contactText:
        "Estou aberto para projetos, parcerias e oportunidades na área de desenvolvimento, automação e criação de soluções digitais.",
      button: "Falar no WhatsApp",
      projectLink: "Ver projeto →",
    },
    en: {
      role: "Full Stack Developer",
      description:
        "I build modern applications, smart automations, and digital solutions focused on performance, usability, and results.",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      about1:
        "I am a developer interested in building systems that solve real problems. I like turning ideas into functional digital products, from landing pages and dashboards to API integrations, automations, and databases.",
      about2:
        "I currently build projects with React, JavaScript, Spring Boot, PostgreSQL, Supabase, n8n, and WhatsApp integrations.",
      contactText:
        "I am open to projects, partnerships, and opportunities in development, automation, and digital solutions.",
      button: "Message me on WhatsApp",
      projectLink: "View project →",
    },
  };

  const t = content[lang];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function handleScroll() {
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;
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
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "contact", label: t.contact },
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
          ? "Site institucional desenvolvido para um advogado, com identidade visual sóbria, layout premium, navegação por áreas de atuação e chamadas estratégicas para WhatsApp. O projeto foi pensado para transmitir autoridade, confiança e facilitar o contato de potenciais clientes."
          : "Institutional website developed for a lawyer, featuring a sober visual identity, premium layout, practice-area navigation, and strategic WhatsApp calls to action. The project was designed to communicate authority, trust, and make client contact easier.",
      tags: ["React", "Vercel", "UI Design", "Responsive"],
      link: "https://caiocarvalhoadv.vercel.app/",
    },
    {
      title: "Work1 – Service Marketplace",
      image: work1,
      category: "Full Stack Platform",
      status: "em desenvolvimento",
      description:
        lang === "pt"
          ? "Plataforma web para conexão entre clientes e prestadores de serviços locais. Permite solicitar serviços ou cadastrar prestadores para receber oportunidades. Atualmente em fase de desenvolvimento, o sistema integra frontend em React com automações via n8n para processamento, armazenamento e distribuição inteligente dos leads."
          : "Web platform connecting clients with local service providers. Allows users to request services or register as providers. Currently under development, the system integrates a React frontend with n8n workflows for processing, storage, and intelligent lead distribution.",
      tags: ["React", "n8n", "Supabase", "Automation", "Marketplace"],
      link: "https://workonejobs.vercel.app/",
    },
    {
      title: "WhatsApp Intelligent Agent",
      image: whatsappAgent,
      category: "Automation & AI",
      description:
        lang === "pt"
          ? "Sistema de atendimento automatizado com agente inteligente para qualificação de leads via WhatsApp. O fluxo interpreta a intenção do usuário, conduz a conversa com lógica avançada e organiza os leads por nível de interesse. Possui fila de lembretes para vendedores e controle anti-loop para evitar mensagens duplicadas."
          : "Automated customer service system with an intelligent agent for lead qualification via WhatsApp. The workflow interprets user intent, handles conversation with advanced logic, and organizes leads by interest level. Includes a reminder queue and anti-loop control.",
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
      status: "em desenvolvimento",
      description:
        lang === "pt"
          ? "API backend desenvolvida para um sistema de marketplace de serviços, responsável por gerenciar usuários, prestadores e solicitações. Estruturada em arquitetura REST com foco em escalabilidade, organização de código e integração com aplicações externas."
          : "Backend API developed for a service marketplace platform, managing users, providers, and service requests. Built with REST architecture, focusing on scalability, clean structure, and integration with external systems.",
      tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      link: "https://github.com/YagoACarvalho/ServiceHubAPIs",
    },
  ];

  return (
    <main style={styles.page}>
      <button
        style={styles.langButton}
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      >
        {lang === "pt" ? "EN" : "PT"}
      </button>

      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <div>
            <h1 style={styles.name}>Yago Alves</h1>
            <h2 style={styles.role}>{t.role}</h2>

            <div style={styles.avatarWrapper}>
              <div style={styles.avatarGlow}></div>
              <img src={profile} alt="Yago Alves" style={styles.avatar} />
            </div>

            <p style={styles.description}>{t.description}</p>

            <nav style={styles.nav}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    ...styles.navItem,
                    color: activeSection === item.id ? "#e2e8f0" : "#64748b",
                  }}
                >
                  <span
                    style={{
                      ...styles.navLine,
                      width: activeSection === item.id ? 64 : 32,
                      background:
                        activeSection === item.id ? "#e2e8f0" : "#475569",
                    }}
                  />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div style={styles.socials}>
            <a
              style={styles.socialLink}
              href="https://github.com/YagoACarvalho"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a style={styles.socialLink} href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a style={styles.socialLink} href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </aside>

        <section style={styles.content}>
          <section id="about" style={styles.section}>
            <h3 style={styles.mobileTitle}>{t.about}</h3>
            <p style={styles.text}>{t.about1}</p>
            <p style={styles.text}>{t.about2}</p>
          </section>

          <section id="experience" style={styles.section}>
            <h3 style={styles.mobileTitle}>{t.experience}</h3>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </section>

          <section id="projects" style={styles.section}>
            <h3 style={styles.mobileTitle}>{t.projects}</h3>

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
                projectLink={t.projectLink}
                lang={lang}
              />
            ))}
          </section>

          <section id="contact" style={styles.section}>
            <h3 style={styles.mobileTitle}>{t.contact}</h3>
            <p style={styles.text}>{t.contactText}</p>

            <a
              style={styles.button}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {t.button}
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}

function ExperienceCard({ year, title, company, description, tags }) {
  return (
    <article style={styles.card}>
      <div style={styles.year}>{year}</div>

      <div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.company}>{company}</p>
        <p style={styles.cardText}>{description}</p>

        <div style={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
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
  projectLink,
  status,
  lang,
}) {
  return (
    <article style={styles.projectCard}>
      {image ? (
        <img src={image} alt={title} style={styles.projectImage} />
      ) : (
        <div style={styles.projectPlaceholder}>
          <span style={styles.projectPlaceholderText}>n8n</span>
        </div>
      )}

      <div style={styles.projectContent}>
        <div style={styles.projectHeader}>
          <span style={styles.projectCategory}>{category}</span>

          {status && (
            <span style={styles.projectStatus}>
              {lang === "pt" ? "Em desenvolvimento" : "In progress"}
            </span>
          )}
        </div>

        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardText}>{description}</p>

        <div style={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noreferrer" style={styles.projectLink}>
          {projectLink}
        </a>
      </div>
    </article>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#94a3b8",
    fontFamily: "Inter, system-ui, sans-serif",
    position: "relative",
  },

  langButton: {
    position: "fixed",
    top: "24px",
    right: "24px",
    zIndex: 20,
    background: "rgba(15, 23, 42, 0.85)",
    color: "#5eead4",
    border: "1px solid rgba(94, 234, 212, 0.45)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontWeight: 700,
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "42% 58%",
    gap: "40px",
    padding: "0 48px",
  },

  sidebar: {
    height: "100vh",
    position: "sticky",
    top: 0,
    padding: "96px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  name: {
    fontSize: "48px",
    lineHeight: "1",
    color: "#e2e8f0",
    margin: "0 0 16px",
  },

  role: {
    fontSize: "20px",
    color: "#e2e8f0",
    fontWeight: 500,
    margin: "0 0 24px",
  },

  avatarWrapper: {
    width: "130px",
    height: "130px",
    position: "relative",
    margin: "26px 0",
  },

  avatarGlow: {
    position: "absolute",
    inset: "-8px",
    background: "rgba(94, 234, 212, 0.18)",
    filter: "blur(18px)",
    borderRadius: "50%",
  },

  avatar: {
    position: "relative",
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid rgba(94, 234, 212, 0.35)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
  },

  description: {
    maxWidth: "330px",
    fontSize: "16px",
    lineHeight: "1.7",
    margin: 0,
  },

  nav: {
    marginTop: "72px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1.6px",
    fontSize: "12px",
    fontWeight: 700,
    transition: "0.25s ease",
  },

  navLine: {
    height: "1px",
    transition: "0.25s ease",
  },

  socials: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  socialLink: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "14px",
  },

  content: {
    padding: "96px 0",
  },

  section: {
    marginBottom: "120px",
    scrollMarginTop: "96px",
  },

  mobileTitle: {
    display: "none",
    color: "#e2e8f0",
    fontSize: "18px",
    marginBottom: "24px",
  },

  text: {
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  card: {
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    gap: "24px",
    padding: "24px",
    borderRadius: "14px",
    marginBottom: "18px",
    background: "rgba(15, 23, 42, 0.4)",
    border: "1px solid rgba(148, 163, 184, 0.08)",
    transition: "0.25s ease",
  },

  year: {
    fontSize: "13px",
    color: "#64748b",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  cardTitle: {
    color: "#e2e8f0",
    fontSize: "20px",
    margin: "0 0 10px",
  },

  company: {
    color: "#cbd5e1",
    fontSize: "14px",
    margin: "0 0 12px",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "1.7",
    margin: "0 0 16px",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  tag: {
    background: "rgba(45, 212, 191, 0.1)",
    color: "#5eead4",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: 600,
  },

  projectCard: {
    borderRadius: "18px",
    marginBottom: "28px",
    background: "rgba(15, 23, 42, 0.4)",
    border: "1px solid rgba(148, 163, 184, 0.08)",
    overflow: "hidden",
    transition: "0.25s ease",
  },

  projectImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
    borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
  },

  projectPlaceholder: {
    height: "220px",
    background:
      "radial-gradient(circle at top left, rgba(94, 234, 212, 0.18), transparent 35%), linear-gradient(135deg, rgba(15, 23, 42, 1), rgba(30, 41, 59, 0.85))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
  },

  projectPlaceholderText: {
    color: "#5eead4",
    fontSize: "54px",
    fontWeight: 800,
    letterSpacing: "-2px",
    opacity: 0.85,
  },

  projectContent: {
    padding: "24px",
  },

  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    gap: "12px",
  },

  projectCategory: {
    display: "inline-block",
    color: "#5eead4",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "1.4px",
    textTransform: "uppercase",
  },

  projectStatus: {
    fontSize: "11px",
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: "999px",
    background: "rgba(250, 204, 21, 0.15)",
    color: "#facc15",
    textTransform: "uppercase",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  },

  projectLink: {
    display: "inline-block",
    marginTop: "16px",
    color: "#5eead4",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "14px",
    border: "1px solid rgba(94,234,212,0.4)",
    padding: "8px 14px",
    borderRadius: "6px",
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    border: "1px solid #5eead4",
    borderRadius: "8px",
    color: "#5eead4",
    textDecoration: "none",
    fontWeight: 700,
  },
};

export default App;