import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import Filter from './Filter';
import Navbar from './Navbar';

const Header = () => {
    const { theme } = useContext(clientContext)

    return (
        <header className={theme, "header"} >
            <Navbar />
            <Filter />
        </header>
    );
};

export default Header;