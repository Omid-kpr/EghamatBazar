'use client'

import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from 'react'

const SearchBar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const style = { color: "gray", fontSize: "1.25em" }

    // Get a new searchParams string by merging the current
    function handleOpen() {
        let params = new URLSearchParams(searchParams.toString())
        params.set('search', 'true')
        params = params.toString()
        router.push('?' + params, { scroll: false })
    }





    return (
        <div className="relative mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
            <div className="relative  flex  justify-center my-2 items-center">
                <Input
                    onFocus={() => handleOpen()}
                    className="bg-gray-100 text-end text-sm placeholder:text-gray-600 pr-10"
                    placeholder="جستجوی اقامتگاه ها" />
                <FaSearch className="absolute right-3" style={style} />
            </div>
        </div>
    )
}

export default SearchBar