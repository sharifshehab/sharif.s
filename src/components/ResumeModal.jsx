
const ResumeModal = ({ isOpen, onClose }) => {

    return (
        <div
            className={`${isOpen
                ? " scale-[1] opacity-100"
                : " scale-[0] opacity-0"
                } w-full h-screen fixed top-0 left-0 z-50 dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
        >
            <div
                className={`w-[90%] dark:bg-white bg-transparent`}
            >
                {isOpen &&
                    <div className="w-full flex justify-between ">
                        <iframe
                            src="/Resume-of-MERN-Stack-Developer-Sharif-Shehabuzzaman.pdf"
                            className="w-full h-[800px] bg-white"
                            title="Sharif Shehab Resume"
                        />
                    </div>
                }

                <div className="flex items-center gap-3 w-full justify-end py-3 pr-5 border-t-2 border-t-secondaryColor">
                    <button
                        className="px-4 py-2 dark:hover:opacity-85 dark:text-white  bg-primaryColor transition-all duration-300"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="px-4 py-2 bg-secondaryColor text-white dark:hover:opacity-85 transition-all duration-300"
                        onClick={onClose}
                    >
                        <a href="/Resume-of-MERN-Stack-Developer-Sharif-Shehabuzzaman.pdf" download="Sharif_Shehab_Resume.pdf" >
                            Download Resume
                        </a>

                    </button>



                </div>
            </div>
        </div>
    );
};

export default ResumeModal;