
"use client";
import { itemVariants } from "@/utils/animations";
import Button from "./ui/Button"
import { motion, useInView } from "motion/react";


const Projects = ({ project }: any) => {
    return (
        //@ts-ignore
        <motion.div variants={itemVariants}>
            <div className="rounded-2xl">
                <img className="rounded-2xl" src={
                    typeof project.image == "string" ?
                        project.image : project.image.src
                } alt="no image" />
            </div>
            <div className="px-2">
                <h1 className="text-xl py-2 ">{project.name}</h1>
                <div className="flex gap-2 ">
                    {
                        project.techStack.map((item: any, index: number) => (
                            <Button key={index} text={item} />
                        ))
                    }
                </div>
            </div>

            <div className="px-2 mt-2 ">
                <Button text="Live" onclick={() => {
                    alert(project.live)
                }} />
            </div>
        </motion.div>
    )
}

export default Projects