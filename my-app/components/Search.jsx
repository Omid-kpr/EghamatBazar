import React from 'react'
import { Input } from './ui/input'
import { FaSearch } from 'react-icons/fa'
import { IconContext } from "react-icons";


const Search = () => {
    const style = { color: "gray", fontSize: "1.25em" }
    return (
        <div className="relative flex  justify-center my-2 items-center">
            <Input
                className="bg-gray-100 w-[90%] text-end text-sm placeholder:text-gray-600 pr-10"
                placeholder="جستجوی اقامتگاه ها" />
            <FaSearch className="absolute right-9" style={style} />
        </div>

    )
}

export default Search