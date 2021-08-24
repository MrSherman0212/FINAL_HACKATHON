import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const ForgotPassword = () => {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const { resetPassword } = useAuth()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-block">
                    <card>
                        <h2>Reset Password</h2>
                        {error && <alert variant="dander">{error}</alert>}
                        <form onSubmit={handleSubmit}>
                            <div id="email">
                                <form>Email</form>
                                <input type="email" ref={emailRef} required />
                            </div>
                            <button disabled={loading} type="submit">Reset Password</button>
                        </form>
                        <Link to="/login">Log In</Link>
                    </card>
                    <div>
                        Need an account? <Link to="signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;