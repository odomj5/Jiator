import { connect } from "react-redux";
import { createReview, updateReview } from "../../actions/review_actions";
import { requestTour } from "../../actions/tour_actions";
import ReviewFrom from "./review_form";
import {closeModal} from "../../actions/modal_actions";

const mSTP = (state) => {
    // debugger
    return ({
       userId: state.session.id,
       errors: state.errors.reviewErrors

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