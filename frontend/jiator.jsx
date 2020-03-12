import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store" 
import Root from "./components/root"
import { login, signup } from "./actions/session_actions"
import {requestTour, requestTours} from "./actions/tour_actions"
import {fetchTour, fetchTours} from "./util/tour_api_util"
import {fetchReviews, fetchReview} from "./util/review_api_util"
import {requestReview, requestReviews} from "./actions/review_actions"


document.addEventListener("DOMContentLoaded", () => {
    let store 

    if (window.currentUser) {
        const preloadedState = {
            entities: {
              users: {[window.currentUser.id]: window.currentUser}  
            },
            session: {id: window.currentUser.id} 
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }
    //Testing
    window.getState = store.getState;   
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.requestTour = requestTour;
    window.requestTours = requestTours;
    window.fetchTour = fetchTour;
    window.fetchTours = fetchTours;
    window.fetchReviews = fetchReviews;
    window.fetchReview = fetchReview
    window.requestReview = requestReview
    window.requestReviews = requestReviews

    //Testing

    const root = document.getElementById("root")
ReactDOM.render(<Root store={store}/>, root)
})