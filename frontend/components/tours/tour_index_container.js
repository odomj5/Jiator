import {connect} from 'react-redux'
import {requestTours} from '../../actions/tour_actions'
import TourIndex from './tour_index'

const mSTP = state => {
    return({
        tours: Object.values(state.entities.tours)
    })
}

const mDTP = dispatch => {
    return({
        requestTours: () => dispatch(requestTours())
    })
}

export default connect(mSTP, mDTP)(TourIndex)