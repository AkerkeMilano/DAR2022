// UserContext

import { createContext, ReactNode, useState } from "react";
import { User } from '../types';

// - создать интерфейс User с полями login, firstname, lastname, avatar
// - создать контекст, который хранит значение юзера, функции логин и логаут
// - в начале у вас нет юзера, при нажатии на логин заполните его дефолтной информацией, при логауте стереть

type UserContextProps = {
    user: User | null;
    login: (user: User | null) => void;
    logout: (user: User | null) => void;
}

interface ProviderProps{
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const UserProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const login = (u: User | null) => {
        setUser(u);
    };
    const logout = () => {
        setUser(null);
    };
    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}