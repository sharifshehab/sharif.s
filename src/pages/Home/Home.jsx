import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Blogs from "./Blogs/Blogs";
import Educations from "./Educations/Educations";

const Home = () => {
  return (
    <>
      <Helmet> <title>Sharif Shehab - Home</title> </Helmet>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Educations/>
      <Blogs/>
      <Contact/>
    </>
  );
};

export default Home;