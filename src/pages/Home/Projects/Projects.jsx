import SectionHeading from "../../../components/SectionHeading";
// react icons
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const Projects = () => {
    return (
        <section className="container mx-auto px-5">
            <SectionHeading bgHeading="Projects" Heading="Projects I have worked on"></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div
                    className=" shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">

                    {/*  icons  */}
                    <div
                        className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
                        <FaRegHeart className="text-[1.1rem] text-gray-600" />
                        <div className="flex items-center gap-[5px]">
                            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
                            <p className="text-[1rem] text-orange-700">5 min</p>
                        </div>
                    </div>

                    {/*  image  */}
                    <img
                        src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="animated_card"
                        className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

                    {/*  texts  */}
                    <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
                        <p className="text-[1rem] uppercase text-gray-600">Travel</p>
                        <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                        <p className="text-[0.9rem] text-gray-600 mt-2">by Jhon Doe</p>
                    </div>
                </div>{/* single */}
                <div
                    className=" shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">

                    {/*  icons  */}
                    <div
                        className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
                        <FaRegHeart className="text-[1.1rem] text-gray-600" />
                        <div className="flex items-center gap-[5px]">
                            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
                            <p className="text-[1rem] text-orange-700">5 min</p>
                        </div>
                    </div>

                    {/*  image  */}
                    <img
                        src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="animated_card"
                        className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

                    {/*  texts  */}
                    <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
                        <p className="text-[1rem] uppercase text-gray-600">Travel</p>
                        <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                        <p className="text-[0.9rem] text-gray-600 mt-2">by Jhon Doe</p>
                    </div>
                </div>{/* single */}
                <div
                    className=" shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">

                    {/*  icons  */}
                    <div
                        className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
                        <FaRegHeart className="text-[1.1rem] text-gray-600" />
                        <div className="flex items-center gap-[5px]">
                            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
                            <p className="text-[1rem] text-orange-700">5 min</p>
                        </div>
                    </div>

                    {/*  image  */}
                    <img
                        src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="animated_card"
                        className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

                    {/*  texts  */}
                    <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
                        <p className="text-[1rem] uppercase text-gray-600">Travel</p>
                        <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                        <p className="text-[0.9rem] text-gray-600 mt-2">by Jhon Doe</p>
                    </div>
                </div>{/* single */}

            </div>
        </section>
    );
};

export default Projects;