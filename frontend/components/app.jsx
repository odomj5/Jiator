import React from "react"
import GreetingContainer from "./greeting/greeting_container"
import TourIndexContainer from "./tours/tour_index_container"
import TourShowContainer from "./tours/tour_show_container"
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
import Footer from "./footer/footer"
import reviewModal from "./modal/reviewModal"

const App = () => (
    <div>
        <Modal/>
        {/* <Route path='/api/tours/:tourId' component={Modal}/> */}
        <Route path="/" component={GreetingContainer} />
        <Route exact path="/" component={SplashContainer} />
        
        {/* Using modal for login and signup   */}
         <Switch>    
            <Route exact path="/api/tours/:tourId" component={TourShowContainer} />
            <Route path="/api/tours/:tourId" component={reviewModal} />
            <Route exact path="/api/tours" component={TourIndexContainer} />



        </Switch>
        <Route path="/" component={Footer} />
    </div>
)

export default App;