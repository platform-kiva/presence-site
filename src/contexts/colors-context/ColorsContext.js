import { createContext, useState } from "react";

import COLOR_DATA from '../../data/color-data.json'

export const ColorsContext = createContext({
    colors: [],
})

export const ColorsProvider = ({ children }) => {
    const [colors, setColors] = useState(COLOR_DATA)

    const value = { colors }

    return (
        <ColorsContext.Provider value={value}>{ children }</ColorsContext.Provider>
    )
}
