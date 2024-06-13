import MainSection from "./MainSection";
import ExperienceSection from "./ExperienceSection";
import Proyectos from "./Proyectos";
import About from "./About";
import "../Styles/Main.css";

export default function Main() {
  return (
    <div className="container">
      <MainSection />
      <ExperienceSection />
      <Proyectos />
      <About />
    </div>
  );
}
