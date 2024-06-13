import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="footer-copyright">
        &copy;2024 Josue Gonzalez. Todos los derechos reservados.
      </p>
      <div className="footer-links">
        <a href="#inicio" rel="noopener noreferrer">
          Inicio
        </a>
        <a
          href="mailto:josuegr834@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactame
        </a>
      </div>
    </footer>
  );
}
