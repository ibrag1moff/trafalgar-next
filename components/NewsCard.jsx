"use client";
// react
import { useState } from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

export default function NewsCard({ img, title, info }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="flex flex-col z-10 rounded-3xl bg-white shadow w-max">
            <img className="w-[370px] h-[250px]" src={img} alt="NewsImg" />
            <div className="flex flex-col gap-4 p-6">
                <h3 className="font-bold max-w-[250px] text-xl">{title}</h3>
                <p className="text-gray-600 max-w-[260px]">
                    {readMore ? info : info.substring(0, 90)}
                </p>
                {readMore ? (
                    <button
                        onClick={() => setReadMore(false)}
                        className="flex items-center gap-3 font-semibold text-main"
                    >
                        Show Less <BsArrowRight size={20} />
                    </button>
                ) : (
                    <button
                        onClick={() => setReadMore(true)}
                        className="flex items-center gap-3 font-semibold text-main"
                    >
                        Read more <BsArrowRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}
