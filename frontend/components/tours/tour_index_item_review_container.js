import { connect } from 'react-redux';
import TourIndexItemReviews from './tour_index_item_reviews'

const mSTP = (state, ownProps) => {
    debugger
    return ({
        reviews: Object.values(state.entities.reviews),
        tourId: ownProps.tourId
    })
}

const mDTP = dispatch => {
    return ({
        requestReviews: tourId => dispatch(requestReviews(tourId))

    })
}

export default connect(mSTP, mDTP)(TourIndexItemReviews)