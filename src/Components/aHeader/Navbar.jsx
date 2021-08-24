import React, { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import lightBookLogo from '../../Assets/Images/lightBookLogo2.svg';
import darkBookLogo from '../../Assets/Images/darkBookLogo2.png';
import { useHistory } from 'react-router-dom';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';

const Navbar = () => {
    const { mode, theme, blockShadowStyle, handleMode, filterDropDown, profileDropDown } = useContext(clientContext)
    const history = useHistory()

    function setHistory() {
        history.push('/')
    }

    return (
        <div className={`${theme} navbar`} style={blockShadowStyle}>
            <div className="logo" onClick={setHistory}>
                <img src={mode ? darkBookLogo : lightBookLogo} alt="BBooker" />
                <h1>BBooker</h1>
                {
                    mode ? (
                        <Brightness3SharpIcon onClick={handleMode} />
                    ) : (
                        <WbSunnySharpIcon onClick={handleMode} />
                    )
                }
            </div>
            <div variant="text" color="primary" aria-label="text primary button group" className="nav-menu">
                <div className="search">
                    <input type="search" placeholder="Search..." />
                </div>
                <div className="filter-btn" onClick={filterDropDown}>
                    Filter
                </div>
                <div className="profile-btn" onMouseOver={profileDropDown}>
                    your profile
                </div>
            </div>
        </div>
    );
};

export default Navbar;