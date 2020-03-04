import React from 'react'
import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import SessionForm from "../session_form/session_form"
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: 'login'
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user)),
        processDemo: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);