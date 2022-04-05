import { movies } from "../../mock";
import { actors } from "../../mock";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import './Main.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

const Main = () => {
    return (
    <div className="MainPage">
        <h2 className="MainPage__header">Movies ({movies.length})</h2>
        <MoviesList movies={movies}></MoviesList>
        <VideoPlayer></VideoPlayer>
        <h2 className="MainPage__header">Actors ({actors.length})</h2>
        <ActorsList actors={actors}></ActorsList>
    </div>);
};

export default Main;