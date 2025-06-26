"use client";
import profile from "@/public/images/profile.png";
import { MapPin } from 'lucide-react';
import * as motion from "motion/react-client";
import Image from 'next/image';

const Sidebar = () => {


    const ball = {
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
    }
    return (
        <div className='w-56 fixed px-4 py-10 flex flex-col pr-8   items-center  h-screen  ' >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                style={ball}
                className=''>
                <Image className='rounded-full size-40' src={profile} alt='no image' />
            </motion.div>
            <div className='mt-8 flex gap-1 items-center open-sans'>
                <MapPin size={"18px"} />
                India
            </div>

            <div className='mt-4 flex gap-2  items-center bg-700 rounded-2xl border-green-800  border  px-2 py-1'>
                <div className='size-2 rounded-full bg-green-500 relative'>
                    <div className='size-2 absolute rounded-full bg-green-500 inset-0 animate-ping'>
                    </div>
                </div>
                <div>Available for work</div>
            </div>
        </div>
    )
}

export default Sidebar