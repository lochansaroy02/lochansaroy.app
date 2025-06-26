"use client";
import Express from "@/assets/icons/Express";
import Mongo from "@/assets/icons/Mongo";
import Next from "@/assets/icons/Next";
import Node from "@/assets/icons/Node";
import Postgres from "@/assets/icons/Postgres";
import React from "@/assets/icons/React";
import SplitText from "@/components/animata/text/text-split";
import Leetcode from "@/components/Leetcode";
import Button from "@/components/ui/Button";
import { ProjectData } from "@/utils/ProjectData";
import { Code, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { Montserrat, Ubuntu } from "next/font/google";
import { Slide } from "react-awesome-reveal";



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


    const box = {
        width: 100,
        height: 100,
        backgroundColor: "",
        borderRadius: 5,
    }




    return (
        <div className="ml-56  w-full h-screen  px-8 py-12   ">
            <div>
                {/* <h1 className={`text-8xl   ${UbuntuFont.className}`}>Lochan Saroy</h1> */}
                <SplitText text="lochan" className="" />
                <Slide direction="up" delay={200} damping={100}>
                    <h2 className={`text-4xl  opacity-75 ${MontserratFont.className}`}>Full Stack Developer</h2>
                </Slide>
            </div>
            <div className="mt-8 flex  gap-4  ">
                {
                    data.map((item, index) => (
                        <Button onclick={() => {
                            console.log("hello")
                        }} text={item.name} icon={item.icon} />
                    ))
                }
            </div>

            <p className="mt-4 text-xl">Lorem ipsumx dolor sit amet consectetur adipisicing elit. Nihil perferendis velit nemo. Architecto alias officia repellat libero hic voluptatum provident, illo porro rerum, quas similique! Itaque nesciunt dignissimos illo adipisci.</p>
            <div className="border-b w-1/2 pb-4  ">

                <h1 className="mt-12 text-4xl font delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">Highlights</h1>
            </div>
            <div className="mt-8">
                <h1 className="text-2xl">Top Projects</h1>

                <div className="grid grid-cols-2 gap-4 mt-4 ">
                    {
                        ProjectData.map((item, index) => (
                            <div key={index} className="outline outline-neutral-700 flex flex-col justify-between rounded-2xl">


                                <div>



                                    <div className="rounded-2xl relative">
                                        <img className="rounded-2xl " src={item.image.src} alt="no image" />
                                    </div>
                                    <div className="px-2 py-1 ">
                                        <h1 className="text-xl">{item.name}</h1>
                                        <h1 className="text-sm font-thin">{item.description}</h1>
                                    </div>
                                </div>


                                <div className="p-2  flex gap-2   ">
                                    <Button text="Code" icon={<Github />} onclick={() => { alert("dfs") }} />
                                    <Button text="Live" icon={<Globe />} onclick={() => { alert("dfs") }} />
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
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={box} key={index} className="flex flex-col  gap-1 items-center">
                                    {(index == 0) ?
                                        <div className="w-24 h-24 bg-neutral-100 rounded-full p-1">
                                            {item.icon}
                                        </div> :
                                        <div className="w-24 h-24">
                                            {item.icon}
                                        </div>

                                    }
                                    <h1>{item.name}</h1>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="my-8">
                    <h1 className="text-2xl">Leetcode Stats</h1>
                    <div className="flex  mt-4">
                        <Leetcode />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default page