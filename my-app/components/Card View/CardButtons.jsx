'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { FaRegEdit } from 'react-icons/fa'
import { FaPowerOff } from "react-icons/fa6";
import { cn } from '@/lib/utils';
import axios from 'axios';

const CardButtons = ({ isActive, id }) => {

    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/updateData', { id });
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error('Error updating isActive:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-[30%] max-w-96 pt-3">
            <Button variant="secondary" className="text-md text-black w-1/3 h-[50%] mx-1">
                ویرایش
                <FaRegEdit style={{ fontSize: "1em" }} className='ml-2' />
            </Button>
            <button
                onClick={clickHandler}
                className={cn("text-md text-white w-2/3 h-[50%] mx-1  rounded-sm flex justify-center items-center",
                    isActive ? "bg-red-500" : "bg-green-500",
                    isLoading ? 'opacity-50 cursor-not-allowed' : '')}
                disabled={isLoading}>
                {isActive ? "غیرفعالسازی اقامتگاه" : "فعالسازی اقامتگاه"}
                <FaPowerOff style={{ fontSize: "1.1em" }} className='ml-2' />
            </button>
        </div>
    )
}

export default CardButtons