import React from "react"
import GreetingContainer from "./greeting/greeting_container"
import TourIndexContainer from "./tours/tour_index_container"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <Modal/>
        {/* <Route to="/" component={GreetingContainer} />
        <Route to="/" component={SplashContainer} /> */}
        <Route path="/" component={GreetingContainer} />
        <Route exact path="/" component={SplashContainer} />

        {/* Using modal for login and signup   */}
         <Switch>    
            <Route exact path="/api/tours" component={TourIndexContainer} />
            {/* <Route exact path="/tours/:tourId" component={TourShowContainer} /> */}

        </Switch>

    </div>
)

export default App;