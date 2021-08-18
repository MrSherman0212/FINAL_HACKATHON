import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import './Footer.css';

const Footer = () => {
    const { mode } = useContext(clientContext)

    return (
        <footer className={mode ? "dark" : "light"}>
            lol
        </footer>
    );
};

export default Footer