
const Navbar = () => {
    const menItems = <>
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
    </>
    return (
        <div className="navbar bg-white p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menItems}
                    </ul>
                </div>

                <a className="text-xl text-white font-semibold logo-Bg-shape py-5 pl-3 pr-8 bg-[#f97316]">Sharif.S</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-none bg-[#f97316] text-white">Download Resume</a>
            </div>
        </div>

    );
};

export default Navbar;