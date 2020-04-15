import { connect } from 'react-redux';
import Review from "./review"
import { deleteReview, returnSingleReview } from "../../actions/review_actions"


// const mSTP = (state, ownProps) => {
//     return ({

//     })
// }

const mDTP = dispatch => {
    return ({
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        returnSingleReview: review => dispatch(returnSingleReview(review))
    })
}


export default connect(null, mDTP)(Review)