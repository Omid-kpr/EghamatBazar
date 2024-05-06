import React from 'react'

const ActiveButton = ({ isActive, lable, count }) => {
    return (
        <div className="flex flex-col w-1/2  ">
            <button className={isActive ? "text-sm text-blue-600" : "text-sm"}>
                {`${lable} (${count})`}
            </button>
            <div className={isActive ? "border-t-4 rounded-t-full border-blue-600 " : "border-t"}></div>
        </div>
    )
}

export default ActiveButton