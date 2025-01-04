import About from "./About/About";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;