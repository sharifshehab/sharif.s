import { Helmet } from "react-helmet-async";
import { GrTechnology } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const post = useLoaderData()
    const { image, summary, title} = post || {}
    return (
        <>
            <Helmet> <title>Sharif Shehab - Post Details</title> </Helmet>

            <section className="container mx-auto px-5 min-h-screen">
                <div className="w-full min-h-screen items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">

                        {/* Main image */}
                        <img
                            src={image}
                            alt=""
                            className=""
                        />
                    </div>

                    {/* Right side - Post details */}
                    <div className="flex flex-col gap-6">
                        <div className="text-center space-y-2">
                            <h1 className="text-4xl md:text-5xl font-bold text-primaryColor underline underline-offset-8 decoration-gray-300">{title}</h1>
                            <h3 className="text-2xl md:text-3xl font-semibold text-secondaryColor">{title}</h3>
                        </div>

                        <p className="">
                            {summary}
                        </p>


                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;