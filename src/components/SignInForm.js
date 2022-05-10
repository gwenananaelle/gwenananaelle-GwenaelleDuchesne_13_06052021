import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemembered, setIsRemembered] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        // const user = JSON.stringify({ email: email, password: password })
        // login(user)
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            name="email"
                            autoComplete="username"
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            autoComplete="current-password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            value={isRemembered}
                            onChange={(e) => setIsRemembered(e.target.value)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}
export default SignInForm