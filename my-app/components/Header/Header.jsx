import React from 'react'
import { FaHome } from 'react-icons/fa'
import AddCardMobile from './AddCardMobile'
import AddCardDesktop from './AddCardDesktop'

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            {/* mobile add form */}
            <div className="sm:hidden">
                <AddCardMobile />
            </div>
            {/* desktop add form */}
            <div className="hidden sm:block">
                <AddCardDesktop />
            </div>
            <div className="flex items-center text-sm font-medium">
                <h2>لیست اقامتگاه های من</h2>
                <FaHome style={{ fontSize: "1.3em" }} className='ml-2 pb-1' />
            </div>
        </div>
    )
}

export default Header