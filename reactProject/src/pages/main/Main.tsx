import React from "react";
import { movies } from "../../mock";
import { actors } from "../../mock";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import './Main.scss';

const Main = () => {
    return <div className="MainPage">
        <h2 className="MainPage_header">Movies ({movies.length})</h2>
        <MoviesList movies={movies}></MoviesList>
        <h2>Actors ({actors.length})</h2>
        <ActorsList actors={actors}></ActorsList>
    </div>;
};

export default Main;