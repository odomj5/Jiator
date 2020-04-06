import { connect } from 'react-redux';
import { requestTours } from '../../actions/tour_actions';
import SplashIndex from "./splash_index";

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

export default connect(mSTP, mDTP)(SplashIndex)
