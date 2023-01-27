import { createContext, useState } from "react";

export const Context = createContext()

export default function Provider({ children }) {

    const [max, setMax] = useState(10)
    const [min, setMin] = useState(100)

    return (
        <Context.Provider value={{ max, setMax, min, setMin }}>
            {children}
        </Context.Provider>
    )
}