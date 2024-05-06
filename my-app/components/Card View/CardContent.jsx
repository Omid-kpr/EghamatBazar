import { cn } from '@/lib/utils'
import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CardContent = ({ item }) => {
    const tagColor = item.active ? "bg-green-500" : "bg-red-500"
    return (
        <div className="relative flex flex-col items-center justify-between w-full h-full">
            <img src={item.imageUrl} alt='location image' className="absolute -z-10 max-w-96 w-full h-full rounded-lg" />
            <div
                className={cn("relative flex items-center justify-center w-16 h-6 left-36 top-3 rounded-full", tagColor)}>
                <div className="flex items-center ">
                    <h3 className='text-gray-100 text-xs font-bold'>{item.active ? "فعال" : "غیرفعال"}</h3>
                    {item.active ? <IoIosCheckmarkCircleOutline style={{ fontSize: "1.1em", color: "white" }} className='ml-1' /> :
                        <IoIosCloseCircleOutline style={{ fontSize: "1.1em", color: "white" }} className='ml-1' />
                    }
                </div>
            </div>
            <div className="absolute bottom-0 max-w-96 w-full h-1/5 flex flex-col justify-between items-end">
                <h2 className='text-white pr-2'>{item.name}</h2>
                <div className='text-white text-end pr-2 pt-2 rounded-b-lg bg-gradient-to-t from-black via-gray-950 w-full h-full'>
                    <button className='bg-gray-800 text-xs rounded-full px-2 py-1 mb-2 bg-transparent'>
                        {`کد اقامتگاه : ${item.id}`}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardContent