'use client';

import { Briefcase, CircleUserRound, Home, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const data = [
        { name: "Home", icon: <Home size={"18px"} />, to: "/home" },
        { name: "Work", icon: <Briefcase size={"18px"} />, to: "/work" },
        { name: "About", icon: <CircleUserRound size={"18px"} />, to: "/about" },
        { name: "Contact", icon: <Phone size={"18px"} />, to: "/contact" },
    ];

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 h-10 flex items-center px-4 rounded-full 
         backdrop-blur-sm text-center text-white border border-neutral-700 shadow-md">
            <div className="flex gap-4 ">
                {data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(item.to)}
                        className="flex justify-center gap-2  cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-gray-800  hover:backdrop:blur-sm px-2 py-1 items-center"
                    >
                        {item.icon}
                        <h1 className="text-sm">{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
