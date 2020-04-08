import { connect } form "react-redux";
import { createReview, updateReview } from "../../actions/review_actions";
import { requestTour } from "../../actions/tour_actions";
import ReviewFrom from "./review_form";

const mSTP = (state, ownProps) => {
    return ({
       userId: state.session.id, 
       tourId: ownProps.match.params.tourId, 
       tour: state.entities.tours[ownProps.match.params.tourId]

    })
}

const mDTP = dispatch => {
    return ({
        createReview: (tourId, formReview) => dispatch(createReview(tourId, formReview)),
        updateReview: formReview => dispatch(updateReview(formReview)),
        requestTour: tourId => dispatch(requestTour(tourId))
    })
}

export default connect(mSTP, mDTP)(ReviewFrom)