
const SectionHeading = ({ bgHeading ="About", Heading ="Know a little bit about me"}) => {
    return (
        <div className="relative flex items-center justify-center font-jost py-14 capitalize">
            <div className="relative z-10">
                <h2 className="text-secondaryColor text-3xl md:text-5xl border-x-2 border-primaryColor px-5">{Heading}</h2>
            </div>
            <div className="absolute bottom-14 inset-0 flex items-center justify-center text-primaryColor text-7xl md:text-9xl font-bold opacity-15">
                {bgHeading}
            </div>
        </div>
    );
};

export default SectionHeading;