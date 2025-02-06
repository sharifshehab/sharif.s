import SectionHeading from "../../../components/SectionHeading";
import Marquee from "react-fast-marquee";
// react icons
import { FaReact, FaNode, FaHtml5, FaCss3 } from "react-icons/fa6";
import { RiFirebaseLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { SiReactrouter, SiMongodb, SiExpress, SiNextui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { LiaFigma } from "react-icons/lia";

const Skills = () => {
    return (
        <section id="skill">
            <SectionHeading bgHeading="Skill" Heading="Skills I have honed"></SectionHeading>

            <Marquee autoFill={true} gradient={true} speed={35}>
                <FaHtml5 size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <FaCss3 size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <RiTailwindCssFill size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <FaBootstrap size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <SiNextui size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <IoLogoJavascript size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <FaReact size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <SiReactrouter size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
            </Marquee>

            <Marquee autoFill={true} direction="right" speed={35}  gradient={true} style={{ marginTop: "40px" }}>
                <RiFirebaseLine size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <RiNextjsLine size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <FaNode size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <SiExpress size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <SiMongodb size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <LiaFigma size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
                <FaGithub size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-28" />
            </Marquee>

        </section>
    );
};

export default Skills;