import { data } from "autoprefixer"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

const Search = ({ isSearching, results }) => {
    return (
        <>
            <div className="relative mx-auto max-w-screen-xl mt-2">
                <div className="px-4 md:px-20">
                    <SearchBar />
                </div>
                <SearchResults isSearching={isSearching} results={results} />

            </div>

        </>

    )
}

export default Search