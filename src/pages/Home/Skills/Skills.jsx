import SectionHeading from "../../../components/SectionHeading";
import Marquee from "react-fast-marquee";
// react icons
import { FaReact, FaNode, FaHtml5, FaCss3 } from "react-icons/fa6";
import { RiFirebaseLine } from "react-icons/ri";
import { SiReactrouter, SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
    return (
        <section>
            <SectionHeading bgHeading="Skill" Heading="Skills I have honed"></SectionHeading>

            <Marquee autoFill={true}>
                <FaHtml5 size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <FaCss3 size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <IoLogoJavascript size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <FaReact size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <SiReactrouter size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <RiFirebaseLine size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <FaNode size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <SiExpress size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
                <SiMongodb size={45} className="bg-primaryColor text-white p-2 rounded-sm mx-20" />
            </Marquee>


        </section>
    );
};

export default Skills;