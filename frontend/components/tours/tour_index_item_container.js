import { connect } from 'react-redux';
import TourIndexItem from './tour_index_item';
import { withRouter } from 'react-router-dom';
import {requestReviews} from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    debugger
    return ({
        reviews: Object.values(state.entities.reviews),
        tour: ownProps.tour
    })
}

const mDTP = dispatch => {
    return ({
        requestReviews: tourId => dispatch(requestReviews(tourId))

    })
}

export default withRouter(connect(mSTP, mDTP)(TourIndexItem))