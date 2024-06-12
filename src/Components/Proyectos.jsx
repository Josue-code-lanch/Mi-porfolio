import CodeIcon from "../Icons/CodeIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import LinkIcon from "../Icons/LinkIcon";
import HTML5 from "../Icons/HTMLIcon";
import "../Styles/Proyectos.css";

export default function Proyectos() {
  const TAGS = {
    HTML: {
      name: "HTML",
      color: {
        backgroundColor: "red",
      },
      icon: <HTML5 />,
    },
    CSS: {
      name: "CSS",
      color: "",
      icon: "",
    },
    JAVASCRIPT: {
      name: "JavaScript",
      color: "",
      icon: "",
    },
    REACT: {
      name: "React",
      color: "",
      icon: "",
    },
  };
  const PROJECTS = [
    {
      title: "LA VELADA DEL AÑO IV",
      description:
        "Landing page de la Velada IV, de Ibai Llanos. Creada con React. Es una landing sencilla y sutil, con un diseño agradable a la vista, que brinda información sobre el evento.",
      link: "https://la-velada-iv.vercel.app/",
      github: "https://github.com/Josue-code-lanch/La-Velada-IV-Clon",
      image: "./portada-la-velada.png",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "STARBUCKS",
      description:
        "Una clonación a la página oficial de Starbucks, creada con HTML. CSS y JavaScript. Es un proyecto en el que sigo trabajando para agregarle más funcionalidades, y adaptandolo a diferentes pantallas",
      link: "https://starbucksclon.vercel.app/",
      github: "https://github.com/Josue-code-lanch/Starbucks-clon",
      image: "./portada-starbucks.webp",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "PROYECTO PKN",
      description:
        "Pequeña landing para el proyecto musical de un amigo. Creada con React, mostrando unos logos que te llevan a sus redes sociales.",
      link: "https://pkn-oficial.vercel.app/",
      github: "https://github.com/Josue-code-lanch/Landing-proyecto-PKN",
      image: "./portada-pkn.webp",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "ULISES SOUTO",
      description:
        "Esta fue una pequeña prueba técnica que me hicieron. Trataba de clonar la página original, y agregarle nuevos estilos, animaciones, etc. Creada con React y Framer Motion, también utilicé React Router para la navegación entre paginas",
      link: "https://ulises-souto-clon.vercel.app/",
      github: "https://github.com/Josue-code-lanch/Ulises-Souto-clon",
      image: "./portada-ulisessouto.webp",
      tags: ["HTML", "CSS", "JavaScript", "React", "Framer"],
    },
    {
      title: "RESPONSIVE CONTACT PAGE",
      description:
        "Este fue un desafío que encontré en una plataforma para Desarrolladores, donde puse a prueba mis conocimientos y habilidades en HTML y CSS, pero sobre todo el Diseño Adaptable.",
      link: "https://pagina-de-contacto-responsive.vercel.app/",
      github: "https://github.com/Josue-code-lanch/Responsive-contact-page",
      image: "./portada-page-contact.webp",
      tags: ["HTML", "CSS", "Diseño adaptable"],
    },
  ];

  return (
    <section className="section-projects-continer" id="proyectos">
      <div className="section-projects-content">
        <span className="section-project-icon">
          <CodeIcon />
        </span>
        <h2 className="section-project-title">Proyectos</h2>
      </div>
      {PROJECTS.map((project) => (
        <article className="article-project" key={project.title}>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-ul">
              {project.tags.map((tag) => (
                <li className="project-li" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <p className="project-description">{project.description}</p>
            <div className="project-preview">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <LinkIcon />
                Preview
              </a>
            </div>
          </div>
          <img
            className="project-image"
            src={project.image}
            alt={`Captura de pantalla del proyecto ${project.title}`}
          />
        </article>
      ))}
    </section>
  );
}
