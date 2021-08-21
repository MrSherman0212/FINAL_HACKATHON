import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import lightBookLogo from '../../Assets/Images/lightBookLogo.svg';
import darkBookLogo from '../../Assets/Images/darkBookLogo.svg';

const Navbar = () => {
    const { mode, theme, handleMode } = useContext(clientContext)

    return (
        <div className={`${theme} navbar`} >
            <div className="logo">
                <img src={mode ? darkBookLogo : lightBookLogo} alt="BBooker" />
            </div>
            <div className="nav-menu">

            </div>
        </div>
    );
};

export default Navbar;