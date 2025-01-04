// react icons
import { FiCpu, FiSmartphone } from "react-icons/fi"
import { IoMdCamera } from "react-icons/io"
import { MdBatteryChargingFull } from "react-icons/md"
import { FaReact } from "react-icons/fa6";
import { RiFirebaseLine } from "react-icons/ri";
import { SiReactrouter, SiMongodb } from "react-icons/si";
import { DiGithubAlt } from "react-icons/di";
import { HiStatusOnline } from "react-icons/hi";


const ProjectDetails = () => {

    return (
        <section className="container mx-auto px-5">
            <div className="w-fullmin-h-screen items-center grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left side - Image gallery */}
                <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">

                    {/* Main image */}
                    <div className="w-full lg:w-[80%] bg-gray-100 rounded-sm h-[280px] lg:h-[400px] relative flex items-center justify-center">
                        <img
                            src="https://i.ibb.co.com/GTGBw03/image-323.png"
                            alt=""
                            className="object-cover w-[200px] lg:w-[300px]"
                        />
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-2xl lg:text-5xl font-bold">Apple iPhone 14 Pro Max</h1>
                    </div>

                    <p className="">
                        Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without
                        recharging throughout the day. Incredible photos in weak, yes and in bright light using
                        the new system with two cameras...
                    </p>
    
                    <h3 className="text-xl font-bold text-primaryColor underline underline-offset-8 decoration-secondaryColor decoration-2 decoration-dashed">Technology :</h3>
                    <div className="flex flex-wrap gap-4 items-center justify-between mt-2">
                        <div className="flex items-center justify-center gap-2">
                            <FaReact size={32} className="text-white p-1 bg-secondaryColor rounded-md" />
                            <div>
                                <p className="text-sm font-bold">React</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <SiReactrouter size={32} className="text-white p-1 bg-secondaryColor rounded-md" />
                            <div>
                                <p className="text-sm font-bold">Router</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <RiFirebaseLine size={32} className="text-white p-1 bg-secondaryColor rounded-md" />
                            <div>
                                <p className="text-sm font-bold">Firebase</p>
                            </div>
                        </div>
                
                        <div className="flex items-center justify-center gap-2">
                            <SiMongodb size={32} className="text-white p-1 bg-secondaryColor rounded-md" />
                            <div>
                                <p className="text-sm font-bold">mongoDB</p>
                            </div>
                        </div>
                    </div>{/* Technology */}

                    {/* features */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <FiSmartphone className="w-5 h-5 text-gray-700" />
                            <div>
                                <p className="text-sm text-gray-500">Screen size</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">6.7"</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <FiCpu className="w-5 h-5 text-gray-700" />
                            <div>
                                <p className="text-sm text-gray-500">CPU</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">Apple A16 Bionic</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <IoMdCamera className="w-5 h-5 text-gray-700" />
                            <div>
                                <p className="text-sm text-gray-500">Camera</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">48-12-12 MP</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <MdBatteryChargingFull className="w-5 h-5 text-gray-700" />
                            <div>
                                <p className="text-sm text-gray-500">Battery</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">4323 mAh</p>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button
                            className="py-3 px-4 w-full border bg-secondaryColor text-white">
                            <div className="flex items-center justify-center gap-2">
                                <DiGithubAlt size={25} className="text-primaryColor"/>
                                Github Repo
                            </div>
                        </button>

                        <button
                            className="py-3 px-4 w-full border bg-primaryColor text-white">
                            <div className="flex items-center justify-center gap-2">
                                <HiStatusOnline size={24} className="text-secondaryColor"/>
                                Visit Live Link
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;