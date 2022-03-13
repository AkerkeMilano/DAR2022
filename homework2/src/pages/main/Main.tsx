import React from "react";
import { movies } from "../../mock";
import MoviesList from "../../components/moviesList/MoviesList";

const Main = () => {
    return <div>
        <h2>Movies ({movies.length})</h2>
        <MoviesList movies={movies}></MoviesList>
    </div>;
};

export default Main;