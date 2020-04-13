import {RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from "../actions/review_actions"

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            return Object.assign(newState, action.payload.reviews)
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state 
    }
}

export default ReviewsReducer