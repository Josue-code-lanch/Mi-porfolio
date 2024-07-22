import MainSection from "./MainSection";
import ExperienceSection from "./ExperienceSection";
import Proyectos from "./Proyectos";
import About from "./About";
import "../Styles/Main.css";
import Skills from "./Skills";

export default function Main() {
  return (
    <div className="container">
      <MainSection />
      <ExperienceSection />
      <Skills />
      <Proyectos />
      <About />
    </div>
  );
}
