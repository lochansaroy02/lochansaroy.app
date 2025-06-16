import { Home, Briefcase, Phone, PersonStanding, CircleUserRound } from "lucide-react";

const Header = () => {


    const data = [
        {
            name: "Home", icon: <Home size={"18px"} />
        },
        {
            name: "Work", icon: <Briefcase size={"18px"} />
        },
        {
            name: "About", icon: <CircleUserRound size={"18px"} />
        },
        {
            name: "Contact", icon: <Phone size={"18px"} />
        },

    ]
    return (
        <div className="fixed top-4 left-1/2  transform   -translate-x-1/2  z-10 py-2 px-6 rounded-full 
        backdrop-blur-md text-center text-white border border-neutral-700 shadow-md">
            <div className="flex gap-4 ">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex justify-center gap-2 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-neutral-800 px-2 py-1 items-center">
                            {item.icon}
                            <h1 className="text-sm">{item.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Header;
