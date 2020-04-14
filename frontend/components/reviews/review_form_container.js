import { connect } from "react-redux";
import { createReview, updateReview, clearReviewErrors } from "../../actions/review_actions";
import { requestTour } from "../../actions/tour_actions";
import ReviewFrom from "./review_form";
import {closeModal} from "../../actions/modal_actions";


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
        closeModal: () => dispatch(closeModal()),
        clearReviewErrors: () => dispatch(clearReviewErrors()) 
    })
}

export default connect(mSTP, mDTP)(ReviewFrom)