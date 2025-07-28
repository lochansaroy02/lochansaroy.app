"use client";

import * as motion from "motion/react-client";

import { EB_Garamond } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
const eb = EB_Garamond({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // choose weights you need
    variable: '--font-eb', // optional CSS variable
    display: 'swap',
})
const page = () => {

    const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);
    const hobbies = ["Swimming", "Dancing", "Art", "Singing", "Coding", "Blogging"]
    const dragContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (dragContainerRef.current) {
            const container = dragContainerRef.current;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            const newPositions = hobbies.map(() => ({
                top: Math.random() * (containerHeight / 2), // initial top within half height
                left: Math.random() * (containerWidth - 120), // avoid overflow // 100 = approximate item width
            }));

            setPositions(newPositions);
        }
    }, []);


    return (

        <div className="flex h-full relative w-full items-center justify-center">
            <div className="grid  mx-18  backdrop-blur-lg h-full w-screen gap-4 p-2  backdrop:opacity-25  grid-cols-3 grid-rows-4 rounded-lg shadow-md">
                <div className="col-span-1 p-2 hover:scale-105 transition-all ease-in-out h-52 row-span-2 border border-slate-900 overflow-hidden rounded-lg shadow-md flex relative  justify-between">

                    <div className=" h-full grid grid-cols-3 gap-2 w-full relative ">

                        {hobbies.map((item, index) => (
                            < div
                                className={`w-fit h-fit px-2 py-1    rounded-2xl bg-cyan-300`} >
                                <h1 className="text-cyan-900">{item}</h1>
                            </div>
                        ))
                        }
                    </div>
                </div>

                <div
                    className="col-span-2 row-span-2 relative overflow-hidden border border-slate-800 rounded-lg shadow-md flex ">
                    <div className=' mt-8 w-3/4 px-8 py-4  '>
                        <h1>Currently readig </h1>
                        <h1 className='text-3xl '>I K I G A I</h1>
                        <p className={`text-wrap text-lg w-[80%] ${eb.className}`} >The Japanese Secret to a Long and Happy Life</p>
                    </div>
                    <div className='rounded-xl'>
                        <Image className='absolute right-0   rounded-l-xl top-10' alt='no image' height={500} width={150} src={"https://m.media-amazon.com/images/I/81l3rZK4lnL._UF1000,1000_QL80_.jpg"} />
                    </div>
                </div>

                <div
                    className="col-span-2 row-span-2 border border-slate-800 rounded-lg shadow-md flex items-center justify-center"
                >
                    {/* <Drag /> */}
                </div>

                <div
                    className="col-span-1 row-span-2 border border-slate-900   rounded-lg shadow-md flex items-center justify-center"
                >
                    <p>Pork</p>
                </div>

            </div>
        </div >

    )
}

export default page