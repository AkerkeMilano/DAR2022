import { Movie } from './types';
import { Actor } from './types';

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Batman',
        description: 'asd',
        duration: 120,
        image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/17/16345007851976.jpg'
    },
    {
        id: 2,
        title: 'Spiderman',
        description: 'asd',
        duration: 60,
        image: 'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-1.jpg?fit=1200%2C680'
    },
    {
        id: 3,
        title: 'Doctor Strange',
        description: 'asd',
        duration: 90,
        image: 'https://phantom-marca.unidadeditorial.es/2337ec80def791b20156f5351288ab99/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/22/16402016411702.jpg'
    }
];

export const actors: Actor[] = [
    {
        id: 1,
        name: 'Tom Hanks',
        age: 65,
        country: 'California, USA',
        hobby: 'typewriters collection',
        image: 'https://i.redd.it/phy5pzm5m6g61.jpg'
    },
    {
        id: 2,
        name: 'Kate Winslet',
        age: 46,
        country: 'Reading, United Kingdom',
        hobby: 'fossil hunting',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F01%2F26%2Fcelebs-species-names-5.jpg&q=60'
    },
    {
        id: 3,
        name: 'Cillian Murphy',
        age: 45,
        country: 'Douglas, Ireland',
        hobby: 'fossil hunting',
        image: 'https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Cillian-Murphy-Peaky-Blinders.jpg'
    }
]