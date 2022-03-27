import React, {useState} from "react";
import { movies } from "../../mock";
import { actors } from "../../mock";
import { Movie } from '../../types';
import { Actor } from '../../types';
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import './Main.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

const Main = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [selectedActor, setSelectedActor] = useState<Actor | null>(null);
    const movieClickHandler = (v: Movie) => {
        setSelectedMovie(v);
    };
    const actorClickHandler = (v: Actor) => {
        setSelectedActor(v);
    };
    const onClose = () => {
        setSelectedMovie(null)
    };
    return <div className="MainPage">
        <h2 className="MainPage__header">Movies ({movies.length})</h2>
        <MoviesList selectedId={selectedMovie?.id} movies={movies} onMovieClick={movieClickHandler}></MoviesList>
        {selectedMovie && <VideoPlayer url={selectedMovie?.trailer} onClose={onClose}></VideoPlayer>}
        <h2>Actors ({actors.length})</h2>
        <ActorsList actors={actors} selectedId={selectedActor?.id} onActorClick={actorClickHandler}></ActorsList>
    </div>;
};

export default Main;