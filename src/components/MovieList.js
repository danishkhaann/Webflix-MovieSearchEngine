import './MovieList.css';
import MovieDetail from './MovieDetail';

function MovieList({ data }) {
    return (
        data.map((movie, index) => {
            return (
                <div key={index} className="poster">
                    <img src={movie["Poster"]} />
                    <MovieDetail
                        title={movie["Title"]}
                        year={movie["Year"]}
                    />
                </div>
            )
        })
    );
}

export default MovieList;