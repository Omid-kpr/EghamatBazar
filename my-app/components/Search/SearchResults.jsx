import Image from 'next/image'
import React from 'react'

const SearchResults = ({ isSearching, results }) => {

    return (
        <div className={isSearching === "true" ? "absolute z-10 w-full h-20" : "hidden"}>
            <div className="bg-gray-200 rounded-sm mx-10">
                {results.length === 0 ?
                    <div className="flex justify-end bg-gray-300 rounded-lg  items-center h-20">
                        <p className='pr-5'>no results</p>
                    </div>
                    : results.map((result) => (
                        <div key={result.id} className="flex justify-between md:justify-around border-b items-center mx-10  h-24">
                            <Image src={result.imageUrl} width={80} height={80} className='rounded-sm' />
                            <p>{result.name}</p>

                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SearchResults