import { useState } from 'react';
import "./SearchMovie.css"

function SearchMovie({ query }) {
    const [searchQuery, setSearchQuery] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();

        query(searchQuery)
    }

    return (
        <div className="search-box">
            <form onSubmit={formSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchMovie;
