import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const ActiveButton = ({ isActive, lable, count }) => {
    const activityQuery = lable === 'فعال' ? true : false
    return (
        <div className="flex flex-col w-40 hover:bg-blue-100 rounded-t-md">
            <Link
                href={`?active=${activityQuery}`}
                className={`text-sm text-center mb-1 ${isActive ? " text-blue-600" : ""}`}>
                {`${lable} (${count})`}
            </Link>
            <div className={isActive ? "relative bottom-1 border-t-4 rounded-t-full border-blue-600 " : "border-b"}></div>
        </div>
    )
}

export default ActiveButton