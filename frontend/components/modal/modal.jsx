import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from '../reviews/review_form_container';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


function Modal({ modal, tourId, closeModal, clearErrors }) {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case "review":
            component = <ReviewFormContainer 
            tourId={tourId}
            />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal} onChange={clearErrors}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    // debugger
    return {
        modal: state.ui.modal,
        tourId: Object.keys(state.entities.tours)[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);