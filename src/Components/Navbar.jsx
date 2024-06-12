import DesktopIcon from "../Icons/DesktopIcon";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <a
          className="navbar-link"
          href="#experiencia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experiencia
        </a>
        <a
          className="navbar-link"
          href="#proyectos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyectos
        </a>
        <a
          className="navbar-link"
          href="#sobre-mi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre mí
        </a>
        <a
          className="navbar-link"
          href="mailto:josuegr834@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
        <span className="navbar-desktop-icon">
          <DesktopIcon />
        </span>
      </nav>
    </>
  );
}
