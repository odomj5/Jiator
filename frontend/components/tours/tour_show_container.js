import { connect } from 'react-redux'
import { requestTour } from '../../actions/tour_actions'
import TourShow from './tour_show'

const mSTP = (state, ownProps) => {
    return({
        tour: state.entities.tours[ownProps.match.params.tourId]
    })
}

const mDTP = dispatch => {
    return({
        requestTour: tourId => dispatch(requestTour(tourId))
    })
}

export default connect(mSTP, mDTP)(TourShow)