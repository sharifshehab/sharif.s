import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProject = () => {
    return (
        <div
            className="shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden relative cursor-pointer group">

            {/*  icons  */}
            <div
                className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-end w-full p-4">
    
                <div className="flex items-center justify-center gap-2">
                    <FaReact className="text-secondaryColor" size={21} />
                    <p className="font-monts font-semibold text-secondaryColor">React</p>
                </div>
            </div>

            {/*  image  */}
            <img
                src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="animated_card"
                className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

            {/*  texts  */}
            <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
                <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                <Link to={'/project-details'}><a className="btn rounded-none bg-primaryColor text-white">View Details</a></Link>
            </div>
        </div>
    );
};

export default SingleProject;