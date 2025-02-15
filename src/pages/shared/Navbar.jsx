import { HiOutlineMenuAlt2 } from "react-icons/hi";
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
                        <span className="text-xl md:text-3xl text-white font-semibold logo-Bg-shape py-5 md:py-4 px-8 md:px-16 -mb-[1px] bg-primaryColor">
                            Sharif <span className="text-secondaryColor">.S</span>
                        </span>
                    </Link>  
                    
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-[16px] font-semibold">{menItems}</ul>
                </div>

                <div className="navbar-end">
                    <div className="pr-3 lg:pr-16">

                        <a href="/Resume-of-MERN-Stack-Developer-Sharif-Shehabuzzaman.pdf" download="Sharif_Shehab_Resume.pdf" className="btn rounded-none bg-primaryColor text-white hover:bg-secondaryColor duration-500">
                            Download Resume
                        </a>

                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <HiOutlineMenuAlt2 size={25} color="#02245b" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 z-10 border-t-2 border-primaryColor mt-[10px] mr-5 w-52 p-2 shadow right-0"
                        >
                            {menItems}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );


};

export default Navbar;