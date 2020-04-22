import { connect } from 'react-redux';
import { requestTour } from '../../actions/tour_actions';
import TourShow from './tour_show';
import {openModal, closeModal} from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return({
        tour: state.entities.tours[ownProps.match.params.tourId],
        reviews: Object.values(state.entities.reviews),
        userId: state.session.id
    })
}

const mDTP = dispatch => {
    return({
        requestTour: tourId => dispatch(requestTour(tourId)),
        requestReviews: tourId => dispatch(requestReviews(tourId)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mSTP, mDTP)(TourShow)