// data
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="py-20 md:py-24 relative">
            <div className="relative">
                <h3
                    id="services"
                    className="text-center font-semibold text-3xl sm:text-4xl title"
                >
                    Our Services
                </h3>
            </div>
            <p className="max-w-[900px] text-gray-600 text-center mx-auto mt-5 mb-10 px-2 md:mb-20">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[37px]">
                {services.map((service) => {
                    return <ServiceCard key={service.id} {...service} />;
                })}
                <img className="absolute left-0" src="/element3.svg" />
            </div>
        </div>
    );
}
