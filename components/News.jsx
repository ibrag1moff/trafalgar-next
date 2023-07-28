"use client";
// react
import { useState } from "react";

// data
import { news } from "@/data/news";

// components
import NewsCard from "./NewsCard";
import CustomBtn from "./CustomBtn";

export default function News() {
    const [loadMore, setLoadMore] = useState(3);

    const loadMoreItems = () => {
        setLoadMore(loadMore + 3);
    };

    return (
        <div className="py-20 relative">
            <h3
                id="news"
                className="text-center font-semibold text-3xl sm:text-4xl title relative mb-20"
            >
                Check out our latest article
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-[37px] mb-[70px]">
                {news.slice(0, loadMore).map((news) => {
                    return <NewsCard key={news.id} {...news} />;
                })}
                <img className="absolute right-0" src="/element2.svg" />
            </div>
            {loadMore === news.length ? (
                <></>
            ) : (
                <div className="flex justify-center">
                    <CustomBtn onClick={loadMoreItems}>View all</CustomBtn>
                </div>
            )}
        </div>
    );
}
