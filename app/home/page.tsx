
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Montserrat, Ubuntu } from "next/font/google"

const UbuntuFont = Ubuntu({
    subsets: ["latin"],
    weight: "500"
})

const MontserratFont = Montserrat({
    subsets: ["latin"],
    weight: "500"
})
const page = () => {

    const data = [
        {
            name: "Leetcode", icon: <Code size={"16px"} />,
        },
        {
            name: "Github", icon: <Github size={"16px"} />,
        },
        {
            name: "Linkedin", icon: <Linkedin size={"16px"} />,
        },
        {
            name: "Twitter", icon: <Twitter size={"16px"} />,
        },
        {
            name: "Email", icon: <Mail size={"16px"} />,
        },
    ]


    return (
        <div className="ml-56  w-full h-screen  px-8 py-12   ">
            <div>
                <h1 className={`text-8xl   ${UbuntuFont.className}`}>Lochan Saroy</h1>
                <h2 className={`text-4xl  opacity-75 ${MontserratFont.className}`}>Full Stack Developer</h2>
            </div>
            <div className="mt-8 flex  gap-4  ">
                {
                    data.map((item, index) => (
                        <div className="cursor-pointer transition-all ease-in-out duration-300 flex hover:bg-gray-700 items-center gap-1 py-1 px-2  border border-neutral-600 rounded-full " key={index}>
                            {item.icon}
                            <h1 className="text-sm"  > {item.name}</h1>
                        </div>
                    ))
                }
            </div>

            <p className="mt-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perferendis velit nemo. Architecto alias officia repellat libero hic voluptatum provident, illo porro rerum, quas similique! Itaque nesciunt dignissimos illo adipisci.</p>
        </div >
    )
}

export default page