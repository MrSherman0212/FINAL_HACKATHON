import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import Navbar from './Navbar';

const Header = () => {
    const { theme } = useContext(clientContext)

    return (
        <header className={theme}>
            <Navbar />
        </header>
    );
};

export default Header;