import SectionHeading from "../../../components/SectionHeading";
// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="container mx-auto px-5">
            <SectionHeading bgHeading="Contact" Heading="Let's have a few words"></SectionHeading>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">

                {/* form area */}
                <form className="w-full ">
                    <div className="flex flex-col gap-1 w-full">
                        <label className="relative">
                            <input type="email"
                                className="peer border-primaryColor border outline-none px-4 py-3 w-full focus:border-secondaryColor transition-colors duration-300"
                            />
                            <span
                                className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primaryColor text-gray-400 peer-focus:px-1 transition-all duration-300 ">
                                Email Address
                            </span>
                        </label>
                    </div>
                    <div className="flex flex-col gap-1 w-full mt-[20px]">
                        <label className="relative w-full">
                            <textarea
                                className="peer min-h-[200px] border-primaryColor border outline-none px-4 py-3 w-full focus:border-secondaryColor transition-colors duration-300"
                            ></textarea>
                            <span
                                className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primaryColor text-gray-400 peer-focus:px-1 transition-all duration-300 ">
                                Write Message
                            </span>
                        </label>
                    </div>
                    <button type="submit" className={`py-3 px-4 text-white text-lg font-semibold bg-secondaryColor border  outline-none mt-3 w-full hover:drop-shadow-lg hover:bg-primaryColor duration-500`}>Submit</button>
                </form>

                {/*  informations  */}
                <aside className="w-full bg-secondaryColor flex flex-col justify-between p-6">

                    <div>
                        <h1 className="text-4xl font-semibold leading-relaxed text-primaryColor">Contact
                            Information</h1>
                        <p className="mt-1 mb-8 text-white leading-relaxed">Let's start a conversation! Reach out for any questions or to discuss how we can collaborate. I'm here to help and eager to connect. Feel free to chat anytime!</p>
                    </div>

                    <div className="flex flex-col gap-[20px] text-gray-300">
                        <p className="flex items-center gap-[8px]">
                            <IoLocationOutline size={18} color="#ff5e14"/>
                            East Alipur, Faridpur, Bangladesh
                        </p>
                        <p className="flex items-center gap-[8px]">
                            <MdOutlineEmail size={18} color="#ff5e14" />
                            sharifshehabuzzaman@gmail.com
                        </p>
                        <p className="flex items-center gap-[8px]">
                            <MdOutlineCall size={18} color="#ff5e14"/>
                            +8801709370961
                        </p>
                        <p className="flex items-center break-all gap-[8px]">
                            <FaWhatsapp size={18} color="#ff5e14"/>
                            +8801709370961
                        </p>
                    </div>
                </aside>

            </div>

        </section>
    );
};

export default Contact;