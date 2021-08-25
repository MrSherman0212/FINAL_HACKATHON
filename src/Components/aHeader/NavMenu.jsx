import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';

const NavMenu = () => {
    const { mode, handleMode, blockShadowStyle, navMenuToggle, filterDropDown, profileToggle, profileDropDown, currentUser, handleMainPage } = useContext(clientContext);
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

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

    return (
        <div className={`${mode ? "dark" : "light"} ${navMenuToggle ? 'dropDownOn' : 'dropDownOff'} filter drop`} style={blockShadowStyle}>
            <div className="section">
                {
                    mode ? (
                        <Brightness3SharpIcon className="theme-btn" onClick={handleMode} />
                    ) : (
                        <WbSunnySharpIcon className="theme-btn" onClick={handleMode} />
                    )
                }
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
            <div className="section">
                <div className="search">
                    <input type="search" placeholder="Search..." />
                </div>
                <div className="filter-btn" onClick={filterDropDown}>
                    Filter
                </div>
            </div>
        </div>
    );
};

export default NavMenu;