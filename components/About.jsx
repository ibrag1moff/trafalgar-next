// icons
import { BsArrowDown } from "react-icons/bs";

// components
import CustomBtn from "./CustomBtn";

export default function About() {
    return (
        <div className="py-20 relative">
            <div
                id="about"
                className="flex flex-col gap-[130px] lg:gap-[200px]"
            >
                <div className="flex flex-col items-center lg:flex-row lg:justify-evenly gap-12  lg:gap-[140px]">
                    <img
                        className="w-[350px] h-[300px] md:w-[550px] md:h-[400px] object-cover"
                        src="/about/img1.png"
                        alt="About"
                    />
                    <div className="flex flex-col items-center text-center lg:text-left gap-6 lg:items-start">
                        <h1 className="text-black max-w-[400px] font-bold text-2xl sm:text-3xl relative aboutTitle">
                            Leading healthcare providers
                        </h1>
                        <p className="text-gray-600 max-w-[400px]">
                            Trafalgar provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone. To us, it’s not just work. We take pride
                            in the solutions we deliver
                        </p>
                        <CustomBtn>Learn more</CustomBtn>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row-reverse lg:px-[30px] xl:px-[100px] lg:justify-evenly gap-12  lg:gap-[140px]">
                    <img
                        className="w-[350px] h-[300px] md:w-[550px] md:h-[400px] object-cover"
                        src="/about/img2.png"
                        alt="About"
                    />
                    <div className="flex flex-col items-center text-center lg:text-left gap-6 lg:items-start">
                        <h1 className="text-black max-w-[400px] font-bold text-2xl sm:text-3xl relative aboutTitle">
                            Download our mobile apps
                        </h1>
                        <p className="text-gray-600 max-w-[400px]">
                            Our dedicated patient engagement app and web portal
                            allow you to access information instantaneously (no
                            tedeous form, long calls, or administrative hassle)
                            and securely
                        </p>
                        <CustomBtn>
                            Download <BsArrowDown size={20} />
                        </CustomBtn>
                    </div>
                </div>
                <img className="absolute right-0" src="/element.svg" />
            </div>
        </div>
    );
}
