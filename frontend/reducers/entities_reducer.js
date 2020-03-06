import { combineReducers } from "redux"
import usersReducer from "./users_reducer"
import ToursReducer from './tours_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    tours: ToursReducer
});

export default entitiesReducer;