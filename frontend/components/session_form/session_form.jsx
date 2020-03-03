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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    handleInput(inputType) {
        return e => this.setState({ [inputType]: e.target.value })
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
                {this.props.formType !== 'signup' ? <Link to={"/signup"}>Sign Up</Link> : <Link to={"/signup"}>Login</Link>}
                <form className="Session-Form" onSubmit={this.handleSubmit}>
                    {this.props.formType === 'signup' ? 'Sign Up:' : 'Login:'}
                    <br/>
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <br />
                    {this.props.formType === 'signup' ? <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label> : null}
                    <br />
                    {this.props.formType === 'signup' ? <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label> : null }
                    <br />
                    {this.props.formType === 'signup' ? <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label> : null}
                    <input type="submit" value={this.props.formType === "login" ? "Login" : "Sign Up"} />
                </form>
            </div>
        )
    }

}

export default SessionForm;