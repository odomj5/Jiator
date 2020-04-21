import { connect } from 'react-redux';
import AverageRating from "./average_rating"


const mSTP = state => {
    // debugger
    return ({
        reviews: Object.values(state.entities.reviews)
    })
}

// const mDTP = dispatch => {
//     return ({
//         deleteReview: reviewId => dispatch(deleteReview(reviewId)),
//         returnSingleReview: review => dispatch(returnSingleReview(review))
//     })
// }


export default connect(mSTP, null)(AverageRating)