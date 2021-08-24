import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { handleMainPage } = useContext(clientContext)

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not mutch')
        }

        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
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
                                <form>Email</form>
                                <input type="email" ref={emailRef} required />
                            </div>
                            <div id="password">
                                <form>Password</form>
                                <input type="password" ref={passwordRef} required />
                            </div>
                            <div id="password-confirm">
                                <form>Password</form>
                                <input type="password" ref={passwordConfirmRef} required />
                            </div>
                            <button disabled={loading} type="submit">Sign Up</button>
                        </form>
                    </card>
                    <div>
                        Already have an account? <Link to="login">Log In</Link>
                    </div>
                    <div>
                        <Link to="/" onClick={handleMainPage}>Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;