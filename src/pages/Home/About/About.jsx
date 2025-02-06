import SectionHeading from "../../../components/SectionHeading";

const About = () => {
    return (
        <section className="container mx-auto px-5" id="about">
            <SectionHeading></SectionHeading>
            <p className="first-letter:font-monts first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-primaryColor first-letter:leading-none">Hello, I'm Sharif Shehab. My journey into the digital world began with graphic design, where I developed my skills in creating brand logos, banners, business cards, and UI templates. Over time, I realized that merely designing templates wasn’t enough—I wanted to see my designs come to life and function dynamically on the web. This curiosity and drive to create more interactive and engaging digital experiences led me to explore the world of coding.

                I started my development journey with WordPress, where I built websites that were not only visually appealing but also functional and user-friendly. This initial step into web development fueled my passion further, pushing me to expand my skill set. I soon transitioned to the MERN stack—comprising MongoDB, Express.js, React, and Node.js—allowing me to grow into a full-stack web developer.

                Today, I strive to seamlessly blend my design sensibilities with my coding expertise, transforming ideas into fully functional, well-crafted websites that offer great user experiences. I aim to merge creativity with cutting-edge technology, delivering digital solutions
                that genuinely help users and clients alike. Whether it's a simple blog or a complex web application, I am dedicated to creating impactful digital experiences that will stand out.</p>
        </section>

    );
};

export default About;