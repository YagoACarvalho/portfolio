import {
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiN8N,
  SiAngular
} from "react-icons/si";

import profile from "./assets/profile.png";

export default function Portfolio() {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "n8n", icon: <SiN8N /> },
  ];

  const projects = [
    {
      title: "WhatsApp Sales Automation",
      description:
        "Built an automation flow for customer service and lead qualification with routing, memory and integration with sales teams.",
      stack: ["n8n", "Evolution API", "Redis"],
      link: "#",
    },
    {
      title: "Digital Signage SaaS",
      description:
        "Designed a SaaS architecture for screen management, activation codes and device monitoring.",
      stack: ["Java", "Spring Boot", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Service Marketplace API",
      description:
        "Backend structure for a services platform with scalable APIs and domain modeling.",
      stack: ["Java", "Spring Boot"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-400 text-sm">
              Software Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
              I build systems, automations and scalable solutions.
            </h1>

            <p className="text-white/70 mt-6">
              Focused on backend, APIs and automation. Turning ideas into real and functional products.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="bg-white text-black px-5 py-2 rounded-xl">
                Projects
              </a>
              <a href="#contact" className="border border-white/20 px-5 py-2 rounded-xl">
                Contact
              </a>
            </div>

            {/* LINKS */}
            <div className="mt-6 flex gap-4 text-sm">
              <a
                href="https://github.com/YagoACarvalho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/yago-carvalho-043b58345/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="flex justify-center">
            <div className="w-[280px] h-[360px] rounded-3xl overflow-hidden border border-white/10">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-white/70 max-w-2xl">
            Developer focused on backend systems, automation and scalable architecture.
            Experience building real-world solutions using APIs, workflows and modern tools.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl bg-white/5 text-sm hover:bg-white/10 transition"
              >
                <span className="text-cyan-400 text-lg">
                  {skill.icon}
                </span>
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-white/60 text-sm mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-black/30 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>

          <div className="flex flex-col gap-3">
            <a href="mailto:yagodevtech@gmail.com">yagodevtech@gmail.com</a>
            <a href="https://github.com/YagoACarvalho">GitHub</a>
            <a href="https://www.linkedin.com/in/yago-carvalho-043b58345/">LinkedIn</a>
          </div>
        </section>

      </div>
    </div>
  );
}