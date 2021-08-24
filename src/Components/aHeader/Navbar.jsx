import React, { useContext, useState } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import lightBookLogo from '../../Assets/Images/lightBookLogo2.svg';
import darkBookLogo from '../../Assets/Images/darkBookLogo2.png';
import lightBurger from '../../Assets/Images/burgerLight.png';
import darkBurger from '../../Assets/Images/burgerDark.png';
import { useHistory } from 'react-router-dom';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import { useAuth } from '../../Contexts/AuthContext';

const Navbar = () => {
    const { mode, theme, blockShadowStyle, handleMode, filterDropDown, profileToggle, profileDropDown, handleMainPage } = useContext(clientContext)
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    function setHistory() {
        history.push('/')
    }

    async function handleLogout() {
        setError("")

        try {
            await logout()
        } catch {
            setError("Failed to log out")
        }
    }

    async function handleUpdate() {
        history.push("/update-password")
        handleMainPage()
    }

    async function handleLogin() {
        history.push("/login")
        handleMainPage()
    }

    return (
        <div className={`${theme} navbar`} style={blockShadowStyle}>
            <div className="logo" onClick={setHistory}>
                <img src={mode ? darkBookLogo : lightBookLogo} alt="BBooker" />
                <h1>BBooker</h1>
            </div>
            <div variant="text" color="primary" aria-label="text primary button group" className="nav-menu">
                {
                    mode ? (
                        <Brightness3SharpIcon className="theme-btn" onClick={handleMode} />
                    ) : (
                        <WbSunnySharpIcon className="theme-btn" onClick={handleMode} />
                    )
                }
                <div className="search">
                    <input type="search" placeholder="Search..." />
                </div>
                <div className="filter-btn" onClick={filterDropDown}>
                    Filter
                </div>
                <div className="profile-btn" onClick={profileDropDown}>
                    {
                        profileToggle ? (
                            <>
                                {
                                    currentUser ? (<>
                                        <div onClick={handleUpdate}>Update Profile</div>
                                        <div onClick={handleLogout}>Log Out</div>
                                    </>
                                    ) : (<>
                                        <div onClick={handleLogin}>Log In</div>
                                    </>
                                    )
                                }
                            </>
                        ) : (
                            <>
                                your profile
                            </>
                        )
                    }
                </div>
            </div>
            <div className="nav-burger-menu">
                <img src={mode ? darkBurger : lightBurger} alt="burger menu" />
            </div>
        </div>
    );
};

export default Navbar;