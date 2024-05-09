import Link from 'next/link'

import React from 'react'

const SearchResults = ({ isSearching }) => {
    return (
        <div className={isSearching === "true" ? "absolute bg-black" : "hidden"}>
            <Link href={'?'} />
            results
        </div>)
}

export default SearchResults