import React from 'react'
import { Input } from './ui/input'
import { FaSearch } from 'react-icons/fa'
const Search = () => {
    return (
        <div className="relative flex  justify-center my-2 items-center">
            <Input className="bg-gray-100 w-[90%] text-end placeholder:text-gray-600 placeholder:mr-6" placeholder="جستجوی اقامتگاه ها" />
            <FaSearch className="absolute right-8 h-6 w-6 text-gray-600 text-xs" />
        </div>

    )
}

export default Search