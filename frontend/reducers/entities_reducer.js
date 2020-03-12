import { combineReducers } from "redux"
import usersReducer from "./users_reducer"
import ToursReducer from './tours_reducer'
import ReviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    tours: ToursReducer,
    reviews: ReviewsReducer
});

export default entitiesReducer;