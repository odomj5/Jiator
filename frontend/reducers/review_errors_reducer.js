import {RECEIVE_REVIEW_ERRORS} from "../actions/review_actions";

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    // debugger
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default reviewErrorsReducer;