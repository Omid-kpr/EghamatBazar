import React from 'react'
import { Button } from './ui/button'
import { FaPlus, FaHome } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <Button
                variant="ghost"
                className="text-blue-600 text-xs hover:bg-blue-100 hover:text-blue-600">
                افزودن اقامتگاه
                <FaPlus style={{ fontSize: "1em" }} className='ml-1' />
            </Button>
            <div className="flex items-center text-sm">
                <h2>لیست اقامتگاه های من</h2>
                <FaHome style={{ fontSize: "1.3em" }} className='ml-2 pb-1' />
            </div>
        </div>
    )
}

export default Header