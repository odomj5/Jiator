import React from 'react'
import { openModal, closeModal } from '../../actions/modal_actions'
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: "signup"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);