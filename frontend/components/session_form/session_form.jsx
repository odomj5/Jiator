import React from "react";
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            first_name: '',
            last_name: '' 

        };

        this.demoUser = {
            username: 'neo2020',
            password: 'hunter12'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    } 

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    handleInput(inputType) {
        return e => this.setState({ [inputType]: e.target.value })
    }

    handleDemo(e) {
        e.preventDefault()
        this.props.processDemo(this.demoUser)
        this.props.closeModal()
    }

    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div>
                <form className="Session-Form" onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className='close-x'>×</div>
                    <div className='form-welc'>{this.props.formType === 'signup' ? 'Welcome to Jiator!' : 'Welcome Back!' }</div>
            
                    <br/>
                    {/* Please {this.props.formType} or {this.props.otherForm} */}
                    
                    <div className='session-errors'>
                    {this.renderErrors()}
                    </div>
                    <label >Username:
                        <br/>
                        <input type="text" autoFocus='autoFocus' value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <br />
                    {this.props.formType === 'signup' ? <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label > : null}
                    <br />
                    {this.props.formType === 'signup' ? <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label> : null }
                    <br />
                    {this.props.formType === 'signup' ? <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label> : null}
                    <button>{this.props.formType === "login" ? "Login" : "Sign Up"}</button>
                    <button className="demo-button" onClick={this.handleDemo}>Demo User</button>
                </form>
                <br/>
                <div className='switch-form'>
                    {this.props.formType === 'signup' ? 'Already have an account?' : 'Need to create an account?'}
                    {this.props.otherForm}
                </div>
                
            </div>
        )
    }

}

export default SessionForm;