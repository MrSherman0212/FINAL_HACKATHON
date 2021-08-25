import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import Filter from './Filter';
import Navbar from './Navbar';
import NavMenu from './NavMenu';

const Header = () => {
    const { theme } = useContext(clientContext)

    return (
        <header className={theme} >
            <Navbar />
            <NavMenu />
            <Filter />
        </header>
    );
};

export default Header;