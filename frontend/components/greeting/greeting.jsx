import React from "react"
import { Link } from "react-router-dom"

const Greeting = ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (<hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
        <button className="header-button" onClick={logout} >Log Out</button>
    </hgroup>) : (
            <nav className="login-signup">
                <button onClick={() => openModal('login')} className="nav-button">Login</button>
                &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')} className="nav-button">Signup</button>
            </nav>
        )

    return (
        <nav className="greeting-nav">
            <Link to={'/'} className='header-link'>
                <h1 className='logo-link'>Jiator</h1>
            </Link>
            {display}
        </nav>
    );
};

export default Greeting