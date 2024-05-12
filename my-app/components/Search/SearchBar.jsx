'use client'

import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import { useRouter, useSearchParams } from "next/navigation"
import { useRef, useState, useEffect } from 'react'
import { useOnClickOutside } from '@/utils/click-outside'
import { useDebounce } from 'use-debounce'

const SearchBar = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const [isSearching, setIsSearching] = useState(false)
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 750)

    const style = { color: "gray", fontSize: "1.25em" }

    // setting state in URL params
    function searchHandler() {
        let params = new URLSearchParams(searchParams.toString())
        params.set('search', isSearching ? 'true' : 'false')
        params = params.toString()
        router.push('?' + params, { scroll: false })
    }

    //setting query in URL params
    if (query) {
        let params = new URLSearchParams(searchParams.toString())
        params.set('q', query)
        params = params.toString()
        router.push('?' + params, { scroll: false })
    }

    useEffect(() => {
        searchHandler()
    }, [isSearching])

    //click outside of search bar to close it
    const searchRef = useRef(null)
    useOnClickOutside(searchRef, () => setIsSearching(false))


    //pressing Escape key closes the search bar
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") {
                setIsSearching(false)
            }
        }

        document.addEventListener("keydown", handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, []);




    return (
        <div className="w-full mb-2" ref={searchRef}>
            <div className="relative flex justify-center items-center">
                <Input
                    value={text}
                    onFocus={() => setIsSearching(true)}
                    onChange={e => setText(e.target.value)}
                    className="bg-gray-100 text-end text-xs placeholder:text-gray-600 pr-10"
                    placeholder="جستجوی اقامتگاه ها" />
                <FaSearch className="absolute right-3" style={style} />
            </div>
        </div>
    )
}

export default SearchBar