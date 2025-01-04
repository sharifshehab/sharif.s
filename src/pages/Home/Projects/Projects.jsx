import SectionHeading from "../../../components/SectionHeading";
import SingleProject from "./SingleProject";

const Projects = () => {
    return (
        <section className="container mx-auto px-5">
            <SectionHeading bgHeading="Projects" Heading="Projects I have worked on"></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <SingleProject></SingleProject>
            <SingleProject></SingleProject>
            <SingleProject></SingleProject>

            </div>
        </section>
    );
};

export default Projects;