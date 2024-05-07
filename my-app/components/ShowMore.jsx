import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaPlus } from "react-icons/fa6";



const ShowMore = ({ isActive, endCount, categoryCount }) => {
    const bigger = categoryCount < endCount
    console.log(categoryCount, endCount, bigger)
    return (
        <div className='flex justify-center items-center h-16 mb-20'>
            <div className={bigger ? "hidden" : "flex justify-center border-2 rounded-sm w-80"}>
                <Link
                    className="flex items-center text-black py-1"
                    href={`?active=${isActive}&endCount=${endCount + 6}`}>

                    مشاهده بیشتر
                    <FaPlus size="0.9em" className='ml-2' />
                </Link>
            </div>
        </div>
    )
}

export default ShowMore