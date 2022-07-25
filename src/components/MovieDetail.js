
function MovieDetail({ title, year }) {
    return (
        <div className="movie-detail">
            <h1 className="movie-title">{ title }</h1> 
            <h1 className="movie-year">{ year }</h1>
        </div>
    )
}

export default MovieDetail;