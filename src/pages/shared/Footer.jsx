// react icons
import { RiGithubLine } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoBehance } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondaryColor border-t border-primaryColor">
            <div className="flex flex-col items-center justify-center space-y-6 py-20">
                <Link to={"/"} className="text-3xl text-primaryColor font-semibold">
                    Sharif <span className="text-white">.S</span>
                </Link>
                <p className="text-white max-w-4xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat cumque omnis doloribus provident dicta Lorem ipsum dolor sit amet.</p>

                <div className="flex items-center gap-5 text-white">
                    <a href="https://github.com/sharifshehab" target="_blank" className="border p-2">
                        <RiGithubLine size={22} className="text-white hover:animate-pulse hover:text-primaryColor duration-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/sharifshehab" target="_blank" className="border p-2">
                        <LiaLinkedinIn size={25} className="text-white hover:animate-pulse hover:text-primaryColor duration-500" />
                    </a>
                    <a href="https://www.behance.net/-svshuvo" target="_blank" className="border p-2">
                        <BiLogoBehance size={25} className="text-white hover:animate-pulse hover:text-primaryColor duration-500" />
                    </a>
                </div>
            </div>
            <div
                className="text-center py-3 border-t">
                <p className="text-white">
                    © {new Date().getFullYear()} <span className="text-primaryColor">Sharif.S</span>. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;