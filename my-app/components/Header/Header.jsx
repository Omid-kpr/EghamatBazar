import React from 'react'
import { FaHome } from 'react-icons/fa'
import AddSheet from './AddSheet'

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <AddSheet />
            <div className="flex items-center text-sm">
                <h2>لیست اقامتگاه های من</h2>
                <FaHome style={{ fontSize: "1.3em" }} className='ml-2 pb-1' />
            </div>
        </div>
    )
}

export default Header