import { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading";
import SingleProject from "./SingleProject";

const Projects = () => {

    const[projects, setProjects] =useState([])

    useEffect(() => {
        fetch('https://sharif-shehab-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, [])

    
    return (
        <section className="container mx-auto px-5" id="projects">
            <SectionHeading bgHeading="Projects" Heading="Projects I have worked on"></SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                }
            </div>
        </section>
    );
};

export default Projects;