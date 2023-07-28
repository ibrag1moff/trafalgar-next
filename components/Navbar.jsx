"use client";
// react & next
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const navLinks = [
        {
            title: "Home",
            url: "#",
        },
        {
            title: "Find a doctor",
            url: "#news",
        },
        {
            title: "Apps",
            url: "#services",
        },
        {
            title: "About us",
            url: "#about",
        },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavActive(false);
        });
    }, []);

    return (
        <nav className="container py-8">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </Link>
                {navActive ? (
                    <div className="fixed top-0 bottom-0 left-0 right-0 bg-main transition-all duration-300">
                        <div className="flex flex-col items-center justify-center h-screen gap-1">
                            {navLinks.map((link, i) => {
                                return (
                                    <a
                                        onClick={() => setNavActive(false)}
                                        className="text-white font-bold text-2xl"
                                        href={link.url}
                                        key={i}
                                    >
                                        {link.title}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="hidden md:flex md:items-center md:gap-[20px] xl:gap-[40px]">
                        {navLinks.map((link, i) => {
                            return (
                                <a
                                    className="hover:text-main transition-all duration-300"
                                    href={link.url}
                                >
                                    {link.title}
                                </a>
                            );
                        })}
                    </div>
                )}
                <div>
                    <button
                        onClick={() => setNavActive(!navActive)}
                        className="relative z-10 md:hidden"
                    >
                        {navActive ? (
                            <AiOutlineClose fill="#fff" size={25} />
                        ) : (
                            <HiOutlineMenuAlt4 size={25} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
