export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: number;
    image: string;
    trailer: string;
};

export interface Actor {
    id: number;
    name: string;
    age: number;
    country: string;
    hobby: string;
    image: string;
    fb: string;
    instg: string;
    tw: string;
};

export interface User {
    login: boolean;
    firstName: string;
    lastName: string;
    avatar: string;
};

export interface Course{
    name: string;
};

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    score: number;
    courses: Course[];
};

