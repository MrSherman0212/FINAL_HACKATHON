import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import './Header';

const Header = () => {
    const { mode, handleMode } = useContext(clientContext)

    return (
        <header className={mode ? "dark" : "light"}>
            head
            <button className="theme-btn" onClick={handleMode}>
                {
                    mode ? "Dark mode" : "Light mode"
                }
            </button>
        </header>
    );
};

export default Header;