import { movies } from "../../mock";
import { actors } from "../../mock";
import { Movie } from '../../types';
import { Actor } from '../../types';
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import './Main.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

// export type selectedMovieContext = {
//     selectedMovie: Movie | null;
// }
// export const SelectedMovieContext = createContext<selectedMovieContext>({});




const Main = () => {
    // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    // const [selectedActor, setSelectedActor] = useState<Actor | null>(null);

    // const actorClickHandler = (v: Actor) => {
    //     setSelectedActor(v);
    // };

    return (
    <div className="MainPage">
        <h2 className="MainPage__header">Movies ({movies.length})</h2>
        <MoviesList movies={movies}></MoviesList>
        <VideoPlayer></VideoPlayer>

        
        {/* <h2 className="MainPage__header">Actors ({actors.length})</h2>
        <ActorsList actors={actors} selectedId={selectedActor?.id} onActorClick={actorClickHandler}></ActorsList> */}
    </div>);
};

export default Main;