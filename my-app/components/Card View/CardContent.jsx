import { cn } from '@/lib/utils'
import Image from 'next/image';
import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CardContent = ({ item }) => {
    const tagColor = item.active ? "bg-green-500" : "bg-red-500"
    return (
        <div className="relative flex flex-col items-center justify-between w-full h-[70%]">
            <Image src={item.imageUrl} width={300} height={300} alt='location image' className="absolute -z-10 w-full h-full rounded-lg" />
            <div className={cn("absolute right-5 top-3 flex items-center justify-center w-16 h-6  rounded-full", tagColor)}>
                <div className="flex items-center ">
                    <h3 className='text-gray-100 text-xs '>{item.active ? "فعال" : "غیرفعال"}</h3>
                    {item.active ? <IoIosCheckmarkCircleOutline style={{ fontSize: "1.1em", color: "white" }} className='ml-1' /> :
                        <IoIosCloseCircleOutline style={{ fontSize: "1.1em", color: "white" }} className='ml-1' />
                    }
                </div>
            </div>
            <div className="absolute bottom-0 max-w-96 w-full h-1/5 flex flex-col justify-between items-end">
                <h2 className='text-white pr-2'>{item.name}</h2>
                <div className='text-white text-end pr-2 pt-2 rounded-b-lg bg-gradient-to-t from-black via-gray-950 w-full h-full'>
                    <button className='relative text-xs rounded-full px-2 py-1 mb-2 '>
                        <h2 className="px-1">{`کد اقامتگاه : ${item.id}`}</h2>
                        <div className='absolute -bottom-2 right-1 -z-10 bg-gray-700  rounded-full w-full h-full mb-2 opacity-90'></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardContent