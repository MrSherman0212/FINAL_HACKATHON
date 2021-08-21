import React, { useState } from 'react';

export const clientContext = React.createContext()

const ClientContextProvider = ({ children }) => {
    const [mode, setMode] = useState(true)
    const theme = mode ? "dark" : "light"
    const handleMode = () => {
        setMode(!mode)
        console.log(mode);
    }

    return (
        <clientContext.Provider value={{
            mode,
            theme,
            handleMode
        }
        }>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;