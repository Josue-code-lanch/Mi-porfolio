import MainSection from "./MainSection";
import ExperienceSection from "./ExperienceSection";
import Proyectos from "./Proyectos";
import "../Styles/Main.css";

export default function Main() {
  return (
    <div className="container">
      <MainSection />
      <hr />
      <ExperienceSection />
      <hr />
      <Proyectos />
    </div>
  );
}
