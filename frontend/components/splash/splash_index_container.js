import { connect } from 'react-redux';
import { requestTours } from '../../actions/tour_actions';
import { requestReviews } from '../../actions/review_actions';
import SplashIndex from "./splash_index";

const mSTP = state => {
    return({
        tours: Object.values(state.entities.tours),
        reviews: Object.values(state.entities.reviews)
    })
}

const mDTP = dispatch => {
    return({
        requestTours: () => dispatch(requestTours()),
        requestReviews: tourId => dispatch(requestReviews(tourId))
    })
}

export default connect(mSTP, mDTP)(SplashIndex)
