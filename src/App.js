import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import { GiPopcorn } from "react-icons/gi";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovie = async (searchQuery) => {
    const url = `https://www.omdbapi.com/?apikey=547ca71d&s=${searchQuery}&page=1`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON["Search"] != undefined) {
      setMovies(responseJSON["Search"]);
    }
  };

  useEffect(() => {
    fetchMovie(query);
  }, [query]);

  const searchQuery = (q) => {
    setQuery(q);
  };

  return (
    <div className="App">
      <h1 className="title">
        WebFl
        <GiPopcorn className="popcorn-icon" />x
      </h1>
      <SearchMovie query={searchQuery} />
      <div className="poster-section">
        <div className="movie-list">
          <MovieList data={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
