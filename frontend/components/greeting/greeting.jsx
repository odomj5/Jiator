import React from "react"
import { Link } from "react-router-dom"

// class Greeting extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         if (this.props.currentUser) {
//             return (
//                 <div>
//                     <h1>Welcome: {this.props.currentUser.username}</h1>
//                     <button onClick={this.props.logout}>Logout</button>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <Link to="/signup">Sign Up</Link>
//                     <br />
//                     <Link to="/login">Login</Link>
//                 </div>
//             )
//         }
//     }
// }

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting