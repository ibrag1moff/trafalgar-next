import Image from "next/image";
import FooterColumn from "./FooterColumn";

export default function Footer() {
    return (
        <footer className="bg-main py-[50px] px-[100px] xl:px-[190px] relative">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex flex-col gap-8 items-center md:items-start p-4">
                    <Image
                        src="/footerlogo.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                    <p className="text-white max-w-[391px] font-medium text-center md:text-left">
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online for everyone
                    </p>
                    <p className="text-white font-medium text-center md:text-left">
                        ©Trafalgar PTY LTD 2020. All rights reserved
                    </p>
                </div>

                <div className="flex flex-wrap px-[40px] md:px-0 md:flex-row md:flex-nowrap justify-center items-center py-16 gap-12 lg:gap-[100px]">
                    <FooterColumn
                        title="Company"
                        linkOne="About"
                        linkTwo="Testimonials"
                        linkThree="Find a doctor"
                        linkFour="Apps"
                    />
                    <FooterColumn
                        title="Region"
                        linkOne="Indonesia"
                        linkTwo="Singapore"
                        linkThree="Hongkong"
                        linkFour="Canada"
                    />
                    <FooterColumn
                        title="Help"
                        linkOne="Help center"
                        linkTwo="Contact support"
                        linkThree="Instructions"
                        linkFour="How it works"
                    />
                </div>
            </div>
            <img
                className="absolute z-10 bottom-0 left-0 w-[80px]"
                src="/element.svg"
            />
        </footer>
    );
}
