import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ReviewFormContainer from '../reviews/review_form_container';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


function reviewModal({ modal, closeModal, clearErrors }) {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "review":
            component = <ReviewFormContainer />;
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

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(reviewModal);