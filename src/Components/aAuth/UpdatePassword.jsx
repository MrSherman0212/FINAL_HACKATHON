import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { handleMainPage } = useContext(clientContext)

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
        handleMainPage()
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-block">
                    <card>
                        <h2>Log In</h2>
                        {error && <alert variant="dander">{error}</alert>}
                        <form onSubmit={handleSubmit}>
                            <div id="email">
                                <form>{emailRef}</form>
                            </div>
                            <div id="password">
                                <form>New Password</form>
                                <input type="password" ref={passwordRef} required />
                            </div>
                            <div id="password-confirm">
                                <form>Confirm Password</form>
                                <input type="password" ref={passwordConfirmRef} required />
                            </div>
                            <button disabled={loading} onClick={handleMainPage} type="submit">Update</button>
                        </form>
                    </card>
                    <div>
                        <Link to="/" onClick={handleMainPage}>Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    )
}