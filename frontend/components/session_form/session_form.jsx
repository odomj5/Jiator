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
                <h2>
                    {this.props.formType}
                </h2>
                <form className="Session-Form" onSubmit={this.handleSubmit}>
                    Welcome to Jiator!
                    <br/>
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label>
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label>
                    <input type="submit" value={this.props.formType === "login" ? "Login" : "Sign Up"} />
                </form>
                {this.props.formType === 'signup' ? <Link to={"/signup"}>Sign Up</Link> : <Link to={"/signup"}>Login</Link> }
            </div>
        )
    }

}

export default SessionForm;