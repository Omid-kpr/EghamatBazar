import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const ActiveButton = ({ isActive, lable, count }) => {
    const activityQuery = lable === 'فعال' ? true : false
    return (
        <div className="flex flex-col w-1/2 hover:bg-blue-100 rounded-t-md">
            <Link
                href={`?active=${activityQuery}`}
                className={cn(isActive ? " text-blue-600" : "", "text-sm text-center")}>
                {`${lable} (${count})`}
            </Link>
            <div className={isActive ? "border-t-4 rounded-t-full border-blue-600 " : "border-t"}></div>
        </div>
    )
}

export default ActiveButton