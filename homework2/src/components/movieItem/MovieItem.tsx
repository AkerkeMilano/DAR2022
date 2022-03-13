import React from "react";
import { Movie } from "../../types";
type Props = {
    movie: Movie;
}
const MovieItem: React.FC<Props> = ({ movie }) => {
    return (
    <div className="movie-item">
        <img src={movie.image} alt={movie.title} style={{width: '200px'}}/>
        <div>{movie.title}</div>
        <div>{movie.description}</div>
        <div>{movie.duration/60} hr</div>
    </div>
    )
};


export default MovieItem;