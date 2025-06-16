import Image from 'next/image'
import React from 'react'
import profile from "@/public/images/profile.png"
import { MapPin } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='w-56 fixed px-4 py-10 flex flex-col pr-8   items-center  h-screen  ' >
            <div className=''>
                <Image className='rounded-full size-40' src={profile} alt='no image' />
            </div>
            <div className='mt-8 flex gap-1 items-center open-sans'>
                <MapPin size={"18px"} />
                India
            </div>
        </div>
    )
}

export default Sidebar