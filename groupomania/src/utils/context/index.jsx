import { createContext, useState } from "react";

export const IdContext = createContext()

export const IdProvider = ({children}) => {
    const [idPost, setIdPost] = useState('')
    return (
        <IdContext.Provider value={{ idPost, setIdPost }}>
            {children}
        </IdContext.Provider>
    )
}