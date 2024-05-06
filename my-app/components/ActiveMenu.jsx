import React from 'react'
import ActiveButton from './ActiveButton'

const ActiveMenu = ({ isActive, activeCount, notActiveCount }) => {
    return (
        <div className="flex mt-8 justify-center">
            <ActiveButton isActive={isActive} count={activeCount} lable="فعال" />
            <ActiveButton isActive={!isActive} count={notActiveCount} lable="غیر فعال" />
        </div>

    )
}

export default ActiveMenu