// import { movies } from "../../mock";
// import { actors } from "../../mock";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import "./Main.scss";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import { Actor, Movie } from "../../types";
import { getActors } from "../../services/actors";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [actorsLoading, setActorsLoading] = useState(false);
  useEffect(() => {
    setMoviesLoading(true);
    setActorsLoading(true);
    const getMoviesData = async () => {
      try {
        const moviesRes = await getMovies();
        setMovies(moviesRes);
      } catch (e) {
        console.error(e);
      }
      setMoviesLoading(false);
    };
    const getActorsData = async () => {
      try {
        const actorsRes = await getActors();
        setActors(actorsRes);
      } catch (e) {
        console.log(e);
      }
      setActorsLoading(false);
    };
    getMoviesData();
    getActorsData();
  }, []);
  return (
    <div className="MainPage">
      <h2 className="MainPage__header">Movies ({movies.length})</h2>
      {moviesLoading ? (
        <h3>Loading movies...</h3>
      ) : (
        <MoviesList movies={movies}></MoviesList>
      )}
      <VideoPlayer></VideoPlayer>
      <h2 className="MainPage__header">Actors ({actors.length})</h2>
      {actorsLoading ? (
        <h3>Loading actors...</h3>
      ) : (
        <ActorsList actors={actors}></ActorsList>
      )}
    </div>
  );
};

export default Main;
