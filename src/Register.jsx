import React, { Component } from "react";
import "./NASARegistrationForm.css";
const host = "http://185.244.48.91:8000/";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
    };
  }
  OnPhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };
  OnUserNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  Info = () => {
    console.log(this.state.username);
  };

  OnFormSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state))
    try {
      const response = await fetch(host + "/api/v1/account/register/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state), 
      });
      if (response.status !== 201) {
        console.log("ERROR")
      } else {
        localStorage.setItem("username", this.state.username);
        window.location.href = '/';
      }
      const data = await response.json();
      // Handle the API response data as needed
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  OnPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  OnConfirmPasswordChange = (e) => {
    this.setState({
      password_confirmation: e.target.value,
    });
  };
  OnEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  render() {
    return (
      <div className="nasa-registration-form">
         <h1>Register</h1>
        <form onSubmit={this.OnFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={this.state.username}
              onChange={this.OnUserNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.OnEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.OnPhoneChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={this.OnPasswordChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">Password Confirmation:</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              required
              value={this.state.password_confirmation}
              onChange={this.OnConfirmPasswordChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
