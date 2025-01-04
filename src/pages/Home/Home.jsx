import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Home;