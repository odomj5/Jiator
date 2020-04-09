import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsreducer from "./review_errors_reducer"

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    reviewErrors: reviewErrorsreducer
});

export default errorsReducer;