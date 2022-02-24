import React from "react";

const HeroSection = () => {
    return (
        <>
            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
                <div className="text-6xl font-semibold text-gray-900 leading-none">Bring all your work together</div>
                <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                    A better experience for yout attendees and less stress your team.
                </div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide text-white bg-stone-100
                    sm:bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.99] relative focus:outline-none
                    hover:shadow-lg hover:from-blue-700 hover:text-black transition duration-200 ease-in-out">
                    Placeholder
                </button>
            </div>
            <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
                <bottom
                    type="button"
                    className="flex items-center justify-center w-12 h-4 rounded-full bg-cool-gray-100 text-gray-800
                        animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out
                        cursor-pointer"
                ></bottom>
            </div>


        </>
    );
};

export default HeroSection;
