// components
import Services from "@/components/Services";
import About from "@/components/About";
import News from "@/components/News";

export default function Home() {
    return (
        <>
            <div className="container py-3 md:py-12">
                <div className="flex flex-col-reverse md:flex-row gap-9 md:gap-0 items-center">
                    <div className="flex flex-col items-center md:items-start gap-[25px]">
                        <h1 className="font-bold text-4xl text-center md:text-left max-w-[360px] md:max-w-[380px]">
                            Virtual healthcare for you
                        </h1>
                        <p className="text-gray-600 text-center sm:max-w-[350px] md:text-left">
                            Trafalgar provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone
                        </p>
                        <button className="bg-main py-2 px-9 rounded-2xl text-white font-semibold hover:bg-sky-400 transition-all duration-300">
                            Consult today
                        </button>
                    </div>
                    <img
                        className="w-[500px] h-[400px] object-cover"
                        src="/home.png"
                        alt="HomeImg"
                    />
                    <div>
                        <img
                            className="absolute left-0 top-[120px] w-[80px]"
                            src="/element.svg"
                            alt="Element"
                        />
                    </div>
                </div>
            </div>
            <Services />
            <About />
            <News />
        </>
    );
}
