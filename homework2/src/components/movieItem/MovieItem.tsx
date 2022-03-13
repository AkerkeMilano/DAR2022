import React, { useState } from "react";
import { Movie } from "../../types";
type Props = {
    movie: Movie;
}
const MovieItem: React.FC<Props> = ({ movie }) => {
    const [addedToWatchLater, setAddedToWatchLater] = useState(false);
    const watchLaterClick = () => {
        setAddedToWatchLater(true);
        console.log('Clicked', addedToWatchLater);
    }
    return (
    <div className="movie-item" style={{ marginBottom: '1rem' }}>
        <img src={movie.image} alt={movie.title} style={{width: '200px'}}/>
        <div>{movie.title}</div>
        <div>{movie.description}</div>
        <div>{movie.duration/60} hr</div>
        <button onClick={watchLaterClick}>{addedToWatchLater ? 'Added to list' : 'Watch later'}</button>
    </div>
    )
};


export default MovieItem;