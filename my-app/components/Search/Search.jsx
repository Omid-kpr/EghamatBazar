import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

const Search = ({ isSearching }) => {
    return (
        <>
            <div>
                <SearchBar />
                <SearchResults isSearching={isSearching} />
            </div>
        </>

    )
}

export default Search