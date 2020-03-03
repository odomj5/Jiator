import React from "react"
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container" 
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Modal from './modal/modal'


const App = () => (
    <div>
        <Modal/>
        <header>
            <Link to={'/'} className='header-link'>
            <h1>Jiator</h1>
            </Link>
            <GreetingContainer />
        </header>
        {/* Using modal for login and signup  */}
        {/* <Switch>
            <AuthRoute exact path={"/login"} component={LoginFormContainer}/>
            <AuthRoute exact path={"/signup"} component={SignupFormContainer}/>
        </Switch> */}

    </div>
)

export default App;