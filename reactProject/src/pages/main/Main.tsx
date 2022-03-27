import React, {useState} from "react";
import { movies } from "../../mock";
import { actors } from "../../mock";
import { Movie } from '../../types';
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import './Main.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

const Main = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    console.log(selectedMovie);
    const movieClickHandler = (v: Movie) => {
        setSelectedMovie(v);
    };
    const onClose = () => {
        setSelectedMovie(null)
    };
    return <div className="MainPage">
        <h2 className="MainPage__header">Movies ({movies.length})</h2>
        <MoviesList selectedId={selectedMovie?.id} movies={movies} onMovieClick={movieClickHandler}></MoviesList>
        <h2>Actors ({actors.length})</h2>
        <ActorsList actors={actors}></ActorsList>
        {selectedMovie && <VideoPlayer url={selectedMovie?.trailer} onClose={onClose}></VideoPlayer>}
    </div>;
};

export default Main;