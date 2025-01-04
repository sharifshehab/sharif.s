import hero_img from "../../../assets/bannerImg.png";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#02245b] py-20 md:pb-0">

            <div className="flex items-center flex-col md:flex-row justify-between gap-8 container mx-auto px-5">

                <div className="content text-white text-center md:text-left space-y-5">
                    <h1 className="text-4xl md:text-7xl">MERN Stack Developer</h1>
                    <p>I design beautiful landing pages</p>
                    <div>
                        <a href="#">git</a>
                    </div>
                    <a className="btn rounded-none bg-[#f97316] text-white">Download Resume</a>
                </div>

                <div className="hero-img order-first md:order-last">
                    <img src={hero_img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;