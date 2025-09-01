import { Helmet } from "react-helmet-async";
import { GrTechnology } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const post = useLoaderData()
    const { image, summary, title } = post || {}
    return (
        <>
            <Helmet> <title>Sharif Shehab - Post Details</title> </Helmet>

            <section className="container mx-auto px-5 min-h-screen">
                <div className="w-full min-h-screen ">

                    <img
                        src={image}
                        alt=""
                        className="mx-auto w-[600px]"
                    />

                    {/* Post details */}
                    <>
                        <h1 className="text-4xl font-bold text-primaryColor underline underline-offset-8 decoration-secondaryColor text-center my-10">{title}</h1>
                        <p>
                            {summary}
                        </p>
                    </>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;