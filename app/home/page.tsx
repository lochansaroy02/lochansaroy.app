
import Express from "@/assets/icons/Express"
import Mongo from "@/assets/icons/Mongo"
import Next from "@/assets/icons/Next"
import Node from "@/assets/icons/Node"
import Postgres from "@/assets/icons/Postgres"
import React from "@/assets/icons/React"
import Leetcode from "@/components/Leetcode"
import { ProjectData } from "@/utils/ProjectData"
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



    const skills = [
        {
            name: "NextJS", icon: <Next />
        },
        {
            name: "MongoDB", icon: <Mongo />
        },
        {
            name: "NodeJS", icon: <Node />
        },
        {
            name: "Express", icon: <Express />
        },
        {
            name: "React", icon: <React />
        },
        {
            name: "Postgres", icon: <Postgres />
        }

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
            <div className="border-b w-1/2 pb-4  ">

                <h1 className="mt-12 text-4xl font">Highlights</h1>
            </div>
            <div className="mt-8">
                <h1 className="text-2xl">Top Projects</h1>

                <div className="grid grid-cols-2 gap-4 mt-4 ">
                    {
                        ProjectData.map((item, index) => (
                            <div key={index} className="outline outline-neutral-700 rounded-2xl">
                                <div className="rounded-2xl">
                                    <img className="rounded-2xl" src={item.image[0]} alt="no image" />
                                </div>
                                <div className="px-2 py-1 ">
                                    <h1 className="text-xl">{item.name}</h1>
                                    <h1 className="text-sm font-thin">{item.description}</h1>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl">Top Skills</h1>
                    <div className="mt-4  flex justify-between flex-wrap">
                        {
                            skills.map((item, index) => (
                                <div key={index} className="flex flex-col  gap-1 items-center">
                                    {(index == 0) ?
                                        <div className="w-24 h-24 bg-neutral-100 rounded-full p-1">
                                            {item.icon}
                                        </div> :
                                        <div className="w-24 h-24">
                                            {item.icon}
                                        </div>

                                    }
                                    <h1>{item.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl">Leetcode Stats</h1>
                    <div className="flex justify-center mt-4">
                        <Leetcode />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default page