import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hero from "./components/hero/hero";
import Edu from "./components/education/edu";
import Skill from "./components/skills/skill";
import Contact from "./components/contact/contact";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo" data-aos="fade-right" data-aos-delay="200">ONLINE CV</div>
        <ul className="navbar-links" data-aos="fade-up">
          <ul className="navbar-links">
            <li data-aos="fade-up" data-aos-delay="200">
              <a href="#home">Home</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <a href="#edu">Education</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <a href="#skills">Skills</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </ul>
      </nav>
      <div className="content">
        <Hero />
        <Edu />
        <Skill />
        <section id="contact">
          <h1 className="judul">Contact Me</h1>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
