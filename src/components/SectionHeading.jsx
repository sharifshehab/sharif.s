
const SectionHeading = ({ bgHeading ="About", Heading ="Know a little bit about me"}) => {
    return (
        <div className="relative flex items-center justify-center py-20">
            <div className="relative z-10 text-white text-3xl md:text-5xl">
                <h2 className="text-secondaryColor">{Heading}</h2>
            </div>
            <div className="absolute bottom-14 inset-0 flex items-center justify-center text-gray-500 text-[120px] font-bold opacity-10">
                {bgHeading}
            </div>
        </div>
    );
};

export default SectionHeading;