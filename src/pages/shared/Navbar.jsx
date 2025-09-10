import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const menItems = (
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'relative group transition focus:bg-transparent duration-300 ' : 'hover:bg-transparent'} to='/' end>Home
                    <span className="absolute left-0 bottom-0 lg:top-[49px] h-[3px] w-full origin-left scale-x-0 bg-primaryColor transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </NavLink>  
            </li>
            <li>
                <a href="#about" className="relative group transition duration-300 hover:bg-transparent">
                    About
                    <span className="absolute left-0 bottom-0 lg:top-[49px] h-[3px] w-full origin-left scale-x-0 bg-primaryColor transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#skill" className="relative group transition duration-300 hover:bg-transparent">
                    Skills
                    <span className="absolute left-0 bottom-0 lg:top-[49px] h-[3px] w-full origin-left scale-x-0 bg-primaryColor transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#projects" className="relative group transition duration-300 hover:bg-transparent">
                    Projects
                    <span className="absolute left-0 bottom-0 lg:top-[49px] h-[3px] w-full origin-left scale-x-0 bg-primaryColor transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#contact" className="relative group transition duration-300 hover:bg-transparent">
                    Contact
                    <span className="absolute left-0 bottom-0 lg:top-[49px] h-[3px] w-full origin-left scale-x-0 bg-primaryColor transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
        </>
    );

    return (
        <header>
            <nav className="navbar bg-white p-0 border-b">
                <div className="navbar-start">
                    <Link  to='/'>
                        <span className="text-xl md:text-3xl text-white font-semibold logo-Bg-shape py-5 md:py-3 px-8 md:px-16 -mb-[1px] bg-primaryColor">
                            Sharif <span className="text-secondaryColor">.S</span>
                        </span>
                    </Link>  
                    
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-[16px] font-semibold">{menItems}</ul>
                </div>

                <div className="navbar-end pe-8 md:pe-16">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button">
                            <button className="flex items-center w-40 btn rounded-none bg-secondaryColor text-white hover:bg-primaryColor duration-500">
                                <h4 className="text-center text-sm md:text-base">My Resume</h4>
                                <MdKeyboardArrowDown className="text-2xl" />
                            </button>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-secondaryColor text-base w-40 z-10 p-0 shadow border-x border-b">
                            <li className="border-b-2 decoration-white">
                                <a
                                    href="/Resume of Full Stack Developer - sharif shehabuzzaman.pdf"
                                    target="_blank"
                                    className="flex justify-center items-center rounded-none text-white hover:bg-primaryColor duration-500 font-semibold py-2"
                                >
                                    Preview
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/Resume of Full Stack Developer - sharif shehabuzzaman.pdf"
                                    download="Sharif_Shehab_Resume.pdf"
                                    className="flex justify-center items-center rounded-none text-center text-white hover:bg-primaryColor duration-500 font-semibold py-2"
                                >
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>{/* Resume */}

                </div>
            </nav>
        </header>
    );


};

export default Navbar;