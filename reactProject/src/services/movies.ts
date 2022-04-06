import axios from 'axios';
import { Movie } from '../types';

export const getMovies = (): Promise<Movie[]> => {
    return axios
        .get<Movie[]>(
            'https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies.json'
        )
        .then((res) => res.data);
}