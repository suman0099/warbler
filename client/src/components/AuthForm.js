import React, { Component } from "react";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "login";
        this.props
            .onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(() => {
                return;
            });
    };

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const {
            heading,
            buttonText,
            signUp,
            errors,
            history,
            removeError
        } = this.props;

        history.listen(() => {
            // listen for any change in the route
            removeError();
        });
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                                <div className="alert alert-danger">
                                    {errors.message}
                                </div>
                            )}
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                className="form-control"
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={this.handleChange}
                                className="form-control"
                            />
                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={this.handleChange}
                                        value={username}
                                        className="form-control"
                                    />
                                    <label htmlFor="image-url">
                                        Image Url:
                                    </label>
                                    <input
                                        type="text"
                                        id="image-url"
                                        name="profileImageUrl"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        value={profileImageUrl}
                                    />
                                </div>
                            )}
                            <button
                                className="btn btn-primary btn-block btn-lg"
                                type="submit"
                            >
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;
