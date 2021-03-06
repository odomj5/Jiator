import React from 'react'
import { openModal, closeModal } from '../../actions/modal_actions'
import { connect } from "react-redux";
import { signup, login, clearErrors, CLEAR_ERRORS } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: "signup",
        currentUser: state.session.id
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: user => dispatch(signup(user)),
        processDemo: user => dispatch(login(user)),
        otherForm: (
            <a onClick={() => dispatch(openModal('login'))}>
                Login
            </a>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);