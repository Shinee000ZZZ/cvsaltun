import './App.css';
import Hero from './components/hero/hero';
import Edu from './components/education/edu';
import Skill from './components/skills/skill';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">ONLINE CV</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#edu">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <Hero />
        <Edu />
        <Skill />
        <section id="contact">
          <h1 className='judul'>Contact Me</h1>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
