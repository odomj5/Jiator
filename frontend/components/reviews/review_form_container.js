import { connect } from "react-redux";
import { createReview, updateReview } from "../../actions/review_actions";
import { requestTour } from "../../actions/tour_actions";
import ReviewFrom from "./review_form";
import {closeModal} from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';


const mSTP = (state) => {
    return ({
       userId: state.session.id,
       errors: state.errors.reviewErrors,
       tourId: Object.keys(state.entities.tours)[0]

    })
}

const mDTP = dispatch => {
    return ({
        createReview: (tourId, formReview) => dispatch(createReview(tourId, formReview)),
        updateReview: formReview => dispatch(updateReview(formReview)),
        requestTour: tourId => dispatch(requestTour(tourId)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mSTP, mDTP)(ReviewFrom)