import React, { useState } from 'react';

export const clientContext = React.createContext()

const ClientContextProvider = ({ children }) => {
    const [mode, setMode] = useState(false)
    console.log(mode);
    const handleMode = () => {
        setMode(!mode)
        console.log(mode);
    }

    return (
        <clientContext.Provider value={{
            mode,
            handleMode
        }
        }>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;