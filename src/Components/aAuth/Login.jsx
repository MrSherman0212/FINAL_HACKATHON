import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { clientContext } from '../../Contexts/ClientContext';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { handleMainPage } = useContext(clientContext)

    function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
        handleMainPage()
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-block">
                    <card>
                        <h2 className="text-center mb-4">Log In</h2>
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
                            <button disabled={loading} className="w-100 mt-3" type="submit">Log In</button>
                        </form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                    </card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="signup">Sign Up</Link>
                    </div>
                    <div className="w-100 text-center mt-2">
                        <Link to="/" onClick={handleMainPage}>Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;