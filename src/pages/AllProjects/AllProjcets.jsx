import { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import SingleProject from "../Home/Projects/SingleProject";

const AllProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://sharif-shehab-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, [])
    return (
        <section className="container mx-auto px-5 min-h-screen" id="projects">
            <SectionHeading bgHeading="All Projects" Heading="All the Projects I have worked on"></SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    projects.map(project => <SingleProject key={project._id} project={project}></SingleProject>)
                }
            </div>
        </section>
    );
};

export default AllProjects;