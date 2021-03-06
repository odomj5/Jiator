import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RETURN_SINGLE_REVIEW = "RETURN_SINGLE_REVIEW"

const receiveReviews = reviews => {
    return({
        type: RECEIVE_REVIEWS, 
        reviews
    })
}

const receiveReview = payload => {
    return({
        type: RECEIVE_REVIEW, 
        payload
    })
}

const receiveErrors = errors => {
    return({
        type: RECEIVE_REVIEW_ERRORS, 
        errors 
    })
}

const removeReview = reviewId => {
    return({
        type: REMOVE_REVIEW,
        reviewId: reviewId
    })
} 

export const clearReviewErrors = () => {
    return({
        type: CLEAR_REVIEW_ERRORS
    })
}

export const returnSingleReview = review => {
    return({
        type: RETURN_SINGLE_REVIEW,
        review
    })
}

export const requestReviews = tourId => dispatch => {
    return APIUtil.fetchReviews(tourId)
    .then((reviews) => dispatch(receiveReviews(reviews)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
} 

export const requestReview = reviewId => dispatch => {
    return APIUtil.fetchReview(reviewId)
    .then((review) => dispatch(receiveReview(review)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const createReview = (tourId, review) => dispatch => {
    return APIUtil.createReview(tourId, review)
    .then((reviews) => dispatch(receiveReview(reviews)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateReview = review => dispatch => {
    return APIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteReview = reviewId => dispatch => {
    return APIUtil.deleteReview(reviewId)
    .then( () => dispatch(removeReview(reviewId)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

