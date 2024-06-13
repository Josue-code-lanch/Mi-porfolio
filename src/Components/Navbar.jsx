import DesktopIcon from "../Icons/DesktopIcon";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-content">
          <a
            className="navbar-link"
            href="#experiencia"
            rel="noopener noreferrer"
          >
            Experiencia
          </a>
          <a
            className="navbar-link"
            href="#proyectos"
            rel="noopener noreferrer"
          >
            Proyectos
          </a>
          <a className="navbar-link" href="#sobre-mi" rel="noopener noreferrer">
            Sobre mí
          </a>
          <a
            className="navbar-link"
            href="mailto:josuegr834@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-span">Contacto</span>
          </a>
          <span className="navbar-desktop-icon">
            <DesktopIcon />
          </span>
        </div>
      </nav>
    </>
  );
}
