import InfoIcon from "../Icons/InfoIcon";
import "../Styles/About.css";

export default function About() {
  return (
    <section className="secction-about" id="sobre-mi">
      <div className="section-about-content">
        <span className="section-about-icon">
          <InfoIcon />
        </span>
        <h2 className="section-about-title">Sobre mí</h2>
      </div>
      <p className="section-about-info">
        <code>
          Mi nombre es Josué Gonzalez, un apasionado estudiante de{" "}
          <span className="developer">Programación Web y Desarrollo Web </span>
          de 22 años, actualmente residiendo en Argentina, Buenos Aires.
          <br />
          <br />
          Empecé a adentrarme en el mundo de la{" "}
          <span className="developer">Tecnología y Desarrollo Web</span> el 11
          de septiembre del 2023. En todo este tiempo que llevo estudiando y
          haciendo proyectos de práctica, he aprendido mucho más que en el día
          1. El <span className="developer">Desarrollo Web</span>, enfocado en
          el área <span className="developer">Frontend</span>, se convirtió en
          una pasión increíble, que decidí que forme parte de mi vida y de mi
          futuro. He pasado de hacer páginas básicas y simples a poder estudiar
          y dominar una librería como lo es <span className="react">React</span>{" "}
          💙. <br /> Cuando comencé, tomé un curso en <u>Academia Hola Mundo</u>
          , con el profesor Nicolás Schurmann, donde aprendí:
          <ul className="about-ul">
            <li>
              <span className="html">HTML</span>
            </li>
            <li>
              <span className="css">CSS</span>{" "}
            </li>
            <li>
              <span className="js">JavaScript</span>{" "}
            </li>
            <li>
              <span className="node-js">Node.js</span>
            </li>
            <li>
              <span className="api">API</span>
            </li>
            <li>
              <span className="mongodb">MongoDB</span>
            </li>
            <li>
              <span className="express-js">Express.js</span>
            </li>
            <li>
              <span className="mongoose">Mongoose</span>
            </li>
          </ul>
          <ul className="about-ul">
            <p>
              También, con el pasar del tiempo fuí aprendiendo las siguientes
              tecnologías:
            </p>
            <li>
              <span className="react">React</span>
            </li>
            <li>Next.js</li>
            <li>
              <span className="css">Tailwind</span>
            </li>
            <li>
              <span className="express-js">Typescript</span>
            </li>
            <li>SQL</li>
          </ul>
          Hoy día, sigo en un estudio constante en la{" "}
          <span className="developer">Programación </span>
          como tal, al mismo tiempo que busco mi primer oportunidad laboral.
          <br />
          <br />A pesar de ser Junior, mi{" "}
          <span className="developer">determinación</span> y{" "}
          <span className="developer">dedicación</span> son mis principales
          activos. Estoy ansioso por enfrentar nuevos desafíos y aprender de
          cada experiencia laboral que se me presente. Mi objetivo es crecer
          profesionalmente en un entorno dinámico y colaborativo, donde pueda
          aplicar mis <span className="developer">conocimientos</span> y seguir
          ampliando mis <span className="developer">habilidades</span>. Estoy
          comprometido con la excelencia y la mejora continua, siempre buscando
          oportunidades para poder contribuir con el equipo.
        </code>
      </p>
    </section>
  );
}
