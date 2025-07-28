"use client";
import Express from "@/assets/icons/Express";
import Mongo from "@/assets/icons/Mongo";
import Next from "@/assets/icons/Next";
import Node from "@/assets/icons/Node";

import React from "@/assets/icons/React";
import SplitText from "@/components/animata/text/text-split";
import Leetcode from "@/components/Leetcode";
import Button from "@/components/ui/Button";
import { containerVariants, itemVariants } from "@/utils/animations";
import { MontserratFont } from "@/utils/fonts";
import { ProjectData } from "@/utils/ProjectData";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Briefcase, Code, Github, Globe, Lightbulb, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from 'react';



const page = () => {



    const paraRef = useRef(null)




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
        // {
        //     name: "Postgres", icon: <Postgres />
        // },
        // {
        //     name: "Tailwind", icon: <Tailwind />
        // },
        // {
        //     name: "Docker", icon: <Docker />
        // },
        // {
        //     name: "Java", icon: <Java />
        // },

    ]


    const box = {
        width: 100,
        height: 100,
        backgroundColor: "",
        borderRadius: 5,
    }

    useGSAP(() => {

        const elements = gsap.utils.toArray('arr')
        gsap.from(elements, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.5
        });
    }, []);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    const marqueeVariants = {
        animate: {
            x: ["0%", "-100%"],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
            }
        }
    };

    return (
        <div className="ml-56 w-fit  h-screen  px-8 py-12   ">
            <div>
                <SplitText text="lochan" className="uppercase" />
                <h2 ref={paraRef} className={`text-4xl  opacity-75 ${MontserratFont.className}`}>Full Stack Developer</h2>

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

            <p className="mt-4 text-lg text-balance font-light">I’m a Full Stack Developer crafting lightning-fast websites using MERN & Next.js. From frontend finesse to backend muscle — I bring your vision to life with pixel-perfect precision and performance-driven code.</p>
            <div className="border-b w-1/2 pb-4  ">

                <h1 className="mt-12 text-4xl font delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">Highlights</h1>
            </div>
            <div className="mt-8">
                <div className="flex  gap-4 items-center">
                    <span className="p-2  rounded-lg bg-[#233212]">
                        <Briefcase className="text-lg text-[#65a30d]" />
                    </span>
                    <h1 className="text-2xl">Top Projects</h1>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 gap-4 mt-4 ">
                    {
                        ProjectData.map((item, index) => (
                            <motion.div
                                key={index}
                                //@ts-ignore
                                variants={itemVariants}
                                className="outline arr outline-neutral-700 flex flex-col justify-between rounded-2xl">


                                <div>



                                    <div className="rounded-2xl relative">
                                        <img className="rounded-2xl " src={item.image.src} alt="no image" />
                                    </div>
                                    <div className="px-2 py-1  ">
                                        <div className="px-2 py-1  w-fit   rounded-2xl bg-gray-700">
                                            <h1 className="text-xl ">{item.name}</h1>
                                        </div>
                                        <p className="text-sm font-thin ">{item.description}</p>
                                    </div>
                                </div>


                                <div className="p-2  flex gap-2   ">
                                    <Button text="Code" icon={<Github />} onclick={() => { alert("dfs") }} />
                                    <Button text="Live" icon={<Globe />} onclick={() => { alert("dfs") }} />
                                </div>

                            </motion.div>
                        ))
                    }
                </motion.div>

                <div className="mt-8 ">
                    <div className="flex  gap-4 items-center">
                        <span className="p-2  rounded-lg bg-[#442310]">
                            <Lightbulb className="text-lg text-[#fcd34d]" />
                        </span>
                        <h1 className="text-2xl">Top Skills</h1>
                    </div>
                    <div className="  mt-8    overflow-hidden">
                        <motion.div className="flex w-max gap-4 "
                            //@ts-ignore
                            variants={marqueeVariants}
                            animate="animate">
                            {
                                skills.map((item, index) => (
                                    <motion.div whileHover={{ scale: 1.2 }}
                                        style={box} key={index} className="flex flex-col  gap-1 items-center">
                                        {(index == 0) ?
                                            <div className=" size-24 bg-neutral-100 rounded-full p-1">
                                                {item.icon}
                                            </div> :
                                            <div className="w-24 h-24">
                                                {item.icon}
                                            </div>

                                        }
                                    </motion.div>
                                ))
                            }
                        </motion.div>
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