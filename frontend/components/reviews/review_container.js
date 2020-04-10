import { connect } from 'react-redux';
import Review from "./review"
import { deleteReview } from "../../actions/review_actions"


// const mSTP = (state, ownProps) => {
//     return ({

//     })
// }

const mDTP = dispatch => {
    return ({
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    })
}


export default connect(mDTP)(Review)