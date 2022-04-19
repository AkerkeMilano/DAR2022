import { createContext, ReactNode, useReducer } from "react";
import { Faculty } from "../types";

interface ProviderProps {
    children: ReactNode;
}
interface Action {
    type: string;
    payload?: any;
}

const initialState: {
    faculties: Faculty[]; message: string;
} = {
    faculties: [],
    message: "",
}

export const FacultyContext = createContext({
    state: initialState,
    dispatch: (action: Action) => {},
})

function reducer(state: any, action: Action){
    switch (action.type){
        case "GET_FACULTIES":
            return {
                ...state,
                faculties: action.payload,
                message: "",
            };
        case "CREATE_FACULTY":
            return {
                ...state,
                message: action.payload,
            };
        case "EDIT_FACULTY":
            return {
                ...state,
                message: action.payload,
            };
        case "DELETE_FACULTY":
            return {
                ...state,
                faculties: action.payload,
            };
        default: 
            return state;
    }
}

export const FacultyProvider = ({children} : ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <FacultyContext.Provider value={{state, dispatch}}>
            {children}
        </FacultyContext.Provider>
    )
}