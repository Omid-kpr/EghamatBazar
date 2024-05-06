import React from 'react'
import { Input } from './ui/input'
import { FaSearch } from 'react-icons/fa'


const Search = () => {
    const style = { color: "gray", fontSize: "1.25em" }
    return (
        <>
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div className="relative  flex  justify-center my-2 items-center">
                    <Input
                        className="bg-gray-100 text-end text-sm placeholder:text-gray-600 pr-10"
                        placeholder="جستجوی اقامتگاه ها" />
                    <FaSearch className="absolute right-3" style={style} />
                </div>
            </div>
            <hr className='mt-2' />
        </>

    )
}

export default Search