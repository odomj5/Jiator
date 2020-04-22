import { connect } from 'react-redux';
import AverageRating from "./average_rating"
import {requestReviews} from "../../actions/review_actions"

const mSTP = (state, ownProps) => {
    debugger
    return ({
        reviews: Object.values(state.entities.reviews),
        tourId: ownProps.tourId,
        
    })
}

const mDTP = dispatch => {
    return ({
        requestReviews: tourId => dispatch(requestReviews(tourId))
        
    })
}


export default connect(mSTP, mDTP)(AverageRating)