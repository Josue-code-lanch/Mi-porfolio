import CheckIcon from "../Icons/CheckIcon";

export default function MainSection() {
  return (
    <>
      <section className="main-section" id="inicio">
        <div className="main-profile">
          <img
            className="main-image"
            src="josue-photo.webp"
            alt="Foto de Josue Gonzalez"
          />

          <span className="main-available">
            <a
              className="main-available-a"
              href="https://www.linkedin.com/in/victor-josu%C3%A9-gonzalez-15938729a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disponible para trabajar
            </a>
            <CheckIcon />
          </span>
        </div>
        <h1 className="main-name">Hola, soy Josué Gonzalez</h1>
        <p className="main-paragraph">
          Estudiante de <span>Desarrollo y Programación Web </span>
          de Argentina, Buenos Aires. Enfocado en el área <span>Frontend</span>.
        </p>
        <div className="buttons">
          <a
            href="mailto:josuegr834@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            Contactame
          </a>
          <a
            href="https://www.linkedin.com/in/victor-josu%C3%A9-gonzalez-15938729a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
