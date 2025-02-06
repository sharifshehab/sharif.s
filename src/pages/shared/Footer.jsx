// react icons
import { RiGithubLine } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoBehance } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondaryColor border-t border-primaryColor w-full">
            <div
                className="container mx-auto px-5 py-3 flex items-center justify-center md:justify-between w-full flex-wrap gap-5">

                <Link to={"/"} className="text-3xl text-primaryColor font-semibold"> 
                    
                        Sharif <span className="text-white">.S</span>
                
                </Link>

                <p className="text-white">
                    © {new Date().getFullYear()} <span className="text-primaryColor">Sharif.S</span>. All Rights Reserved.
                </p>

                <div className="flex items-center gap-3 text-white">
                    <a href="https://github.com/sharifshehab" target="_blank">
                        <RiGithubLine size={22} className="text-white hover:animate-pulse hover:text-primaryColor duration-500"/>
                    </a>
                    <a href="https://www.linkedin.com/in/sharifshehab" target="_blank">
                        <LiaLinkedinIn size={25} className="text-white hover:animate-pulse hover:text-primaryColor duration-500"/>
                    </a>
                    <a href="https://www.behance.net/-svshuvo" target="_blank">
                        <BiLogoBehance size={25} className="text-white hover:animate-pulse hover:text-primaryColor duration-500"/>
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;