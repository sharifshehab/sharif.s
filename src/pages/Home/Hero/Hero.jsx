import hero_img1_1 from "../../../assets/profile-image.webp";
import { RiGithubLine } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoBehance } from "react-icons/bi";
import ResumeModal from "../../../components/ResumeModal";
import { useState } from "react";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-gradient-to-r from-secondaryColor pb-0 mt-0">
            <div className="flex items-center flex-col lg:flex-row justify-between gap-10 md:gap-0 container mx-auto px-5">
                <div className="content text-white text-center md:text-left">
                    <div className="space-y-5">
                        <div className="">
                            <span className="text-primaryColor">Hi, My Name is</span>
                            <h2 className="text-3xl md:text-5xl font-jost">Sharif Shehabuzzaman</h2>
                        </div>
                        <div>
                            <span>I'm A</span>
                            <h1 className="font-jost text-3xl md:text-5xl lg:text-7xl font-extrabold leading-snug text-stroke text-stroke-white text-stroke-[5px] text-primaryColor underline underline-offset-8 decoration-white decoration-4">
                                Full Stack Developer
                            </h1>
                        </div>
                    

                    <p className="text-lg">Crafting sleek designs with exceptional performance.
                        <br />
                        Enhancing the power of MERN for seamless, robust applications.
                    </p>
                    <div className="flex items-center justify-center md:justify-normal gap-3">
                        <a href="https://github.com/sharifshehab" target="_blank">
                            <RiGithubLine size={28} className="border border-primaryColor text-secondaryColor bg-white p-1 rounded-full hover:animate-pulse hover:text-primaryColor hover:border-white duration-500" />
                        </a>
                        <a href="https://www.linkedin.com/in/sharifshehab" target="_blank">
                            <LiaLinkedinIn size={28} className="border border-primaryColor text-secondaryColor bg-white p-1 rounded-full hover:animate-pulse hover:text-primaryColor hover:border-white duration-500" />
                        </a>
                        <a href="https://www.behance.net/-svshuvo" target="_blank">
                            <BiLogoBehance size={28} className="border border-primaryColor text-secondaryColor bg-white p-1 rounded-full hover:animate-pulse hover:text-primaryColor hover:border-white duration-500" />
                        </a>
                    </div>
                    </div>


                    <button onClick={() => setIsModalOpen(true)} className="btn rounded-none bg-primaryColor text-white hover:bg-secondaryColor duration-500 mt-5">
                        View Resume
                    </button>

                    <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                </div>

                <div className="hero-img order-last">
                    <img src={hero_img1_1} alt="" className="w-[600px]" />
                </div>
            </div>

        </section>
    );
};

export default Hero;