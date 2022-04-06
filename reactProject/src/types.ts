export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: number;
    image: string;
    trailer: string;
};

export interface Actor {
    objectID: number;
    name: string;
    rating: number;
    alternative_name: string;
    image_path: string;
};

export interface User {
    login: boolean;
    firstName: string;
    lastName: string;
    avatar: string;
};

