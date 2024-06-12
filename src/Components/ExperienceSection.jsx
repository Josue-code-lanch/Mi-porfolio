import BriefcaseIcon from "../Icons/BriefcaseIcon";
import "../Styles/Experience.css";

export default function ExperienceSection() {
  return (
    <section className="section-xp-container" id="experiencia">
      <div className="section-xp-content">
        <span className="section-xp-icon">
          <BriefcaseIcon />
        </span>
        <h2 className="section-xp-title">Experiencia laboral</h2>
      </div>
      <p className="section-xp-paragraph">
        Actualmente no poseo experiencia laboral, pero estoy en constante
        búsqueda de mi primer empleo en el mundo del{" "}
        <span className="span-xp">Desarrollo Web</span>
        . <br />
        <br />
        Cuento con experiencia en prácticas que hice a lo largo de mi camino en
        el aprendizaje <span className="span-xp">Frontend</span>, como
        clonaciones de páginas existentes, completar desafíos de proyectos en
        diferentes plataformas y foros, etc.
      </p>
    </section>
  );
}
