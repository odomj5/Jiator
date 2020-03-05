import React from "react"
import { Link } from "react-router-dom"

const Greeting = ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (<hgroup className="header-group">
        <h2 className="header-name">{currentUser.firstName} are you ready to explore SF?</h2>
        <button className="header-button" onClick={logout} ><i class="fas fa-sign-out-alt"></i>Log Out</button>
    </hgroup>) : (
            <nav className="login-signup">
                <button onClick={() => openModal('login')} className="nav-button"><i className="far fa-user-circle"></i>Login</button>
                &nbsp;&nbsp;
            <button onClick={() => openModal('signup')} className="nav-button"><i className="fas fa-user-plus"></i>Signup</button>
            </nav>
        )

    return (
        <div className="greeting-div">
            <nav className="greeting-nav">
                <Link to={'/'} className='header-link'>
                    <h1 className='logo-link'>Jiator</h1>
                </Link>
                {display}
            </nav>
        </div>
    );
};

export default Greeting