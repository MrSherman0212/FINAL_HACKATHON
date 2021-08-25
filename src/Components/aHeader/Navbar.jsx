import React, { useContext, useEffect, useState } from 'react';
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
    const { mode, theme, blockShadowStyle, handleMode, filterDropDown, profileToggle, profileDropDown, handleMenu, handleMainPage, getProducts } = useContext(clientContext)
    const history = useHistory()
    const { currentUser } = useAuth()
    const [error, setError] = useState("")
    const { logout } = useAuth()
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

    function handleUpdate() {
        history.push("/update-password")
        handleMainPage()
    }

    function handleLogin() {
        history.push("/login")
        handleMainPage()
    }

    let search = new URLSearchParams(history.location.search)
    const [searchWord, setSearchWord] = useState(search.get('q') || '')
    function handleSearchInput(params, value) {
        setSearchWord(value)
        search.set(params, value)
        search.set("_page", 1);
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
    }

    useEffect(() => {
        getProducts(history)
    }, [searchWord])


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
                    <input type="search" placeholder="Search..."
                        onChange={(e) => handleSearchInput("q", e.target.value)}
                    />
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
                                {currentUser ? (
                                    <div>{currentUser.email}</div>
                                ) : (null)}
                                your profile
                            </>
                        )
                    }
                </div>
            </div>
            <div className="nav-burger-menu" onClick={handleMenu}>
                <img src={mode ? darkBurger : lightBurger} alt="burger menu" />
            </div>
        </div>
    );
};

export default Navbar;