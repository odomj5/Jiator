import { connect } from 'react-redux';
import TourIndexItemReviews from './tour_index_item_reviews'

const mSTP = state => {

    return ({
        reviews: Object.values(state.entities.reviews)
    })
}

// const mDTP = dispatch => {
//     return ({
//         requestReviews: tourId => dispatch(requestReviews(tourId))

//     })
// }

export default connect(mSTP, null)(TourIndexItemReviews)