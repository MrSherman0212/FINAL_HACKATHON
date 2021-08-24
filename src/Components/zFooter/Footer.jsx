import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import './Assets/Footer.css';

const Footer = () => {
    const { mode, blockShadowStyle } = useContext(clientContext)

    return (
        <footer className="footer" style={blockShadowStyle}>
            lol
        </footer>
    );
};

export default Footer