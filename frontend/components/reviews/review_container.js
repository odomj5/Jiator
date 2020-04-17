import { connect } from 'react-redux';
import Review from "./review"
import { deleteReview, returnSingleReview } from "../../actions/review_actions"


const mSTP = (state, ownProps) => {
    debugger
    return ({
        ui: state.ui.modal
    })
}

const mDTP = dispatch => {
    return ({
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        returnSingleReview: review => dispatch(returnSingleReview(review))
    })
}


export default connect(mSTP, mDTP)(Review)