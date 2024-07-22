import CodeIcon from "../Icons/CodeIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import LinkIcon from "../Icons/LinkIcon";
import "../Styles/Proyectos.css";
import { useState } from "react";

export default function Proyectos() {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

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
      title: "BUSINESS MANAGER",
      description:
        "Una página web que controla clientes, facturas, ingresos y usuarios. Es un proyecto a modo de práctica para un cliente ficticio, creada con Typescript, Tailwind, Next.js y SQL. Es un proyecto en el que sigo trabajando y practicando estas tecnologías para agregarle más funcionalidades, adaptándolo a diferentes pantallas, y mejorando el diseño.",
      link: "https://managerbusiness.vercel.app/",
      github: "https://github.com/Josue-code-lanch/Business-Manager",
      image: "./portada-businessmanager.png",
      tags: ["Tailwind", "Typescript", "Next.js", "SQL"],
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
      title: "TWITTER FOLLOW CARD",
      description:
        "Clonación de la tarjeta de seguidos de Twitter/X. Creada con React. Adaptada a diferentes pantallas, siguiendo el diseño de la página oficial de Twitter.",
      link: "https://twitter-follow-card-lyart.vercel.app/",
      github:
        "https://github.com/Josue-code-lanch/Twitter-Follow-Card/tree/master/Twitter-Follow-Card",
      image: "./portada-twittercard.webp",
      tags: ["HTML", "CSS", "JavaScript", "JSX", "React"],
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
      title: "BUSCADOR DE PRODUCTOS",
      description:
        "Desarrollé un Buscador de Productos como una herramienta eficiente y amigable para mejorar la experiencia de compra en línea. Este proyecto demuestra mi habilidad para integrar tecnologías web modernas y crear soluciones que mejoren significativamente la usabilidad y funcionalidad de una tienda en línea.",
      link: "https://reactproducts-finder.vercel.app/",
      github: "https://github.com/Josue-code-lanch/React-shopping-cart",
      image: "./portada-buscadordeproductos.png",
      tags: ["HTML", "CSS", "JavaScript", "React"],
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

  const visibleProjects = showMore ? PROJECTS : PROJECTS.slice(0, 3);
  return (
    <section className="section-projects-continer" id="proyectos">
      <div className="section-projects-content">
        <span className="section-project-icon">
          <CodeIcon />
        </span>
        <h2 className="section-project-title">Proyectos</h2>
      </div>
      {visibleProjects.map((project) => (
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
      <button onClick={handleShowMore} className="show-more-button">
        {showMore ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}
