import React, { Component } from "react";
import "./NASARegistrationForm.css"; // Import your CSS file for styling
const host = "http://185.244.48.91:8000/";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  OnUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  OnPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  OnFormSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    let response = undefined;
    try {
      response = await fetch(`${host}/api/v1/account/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      if(response.status >= 200 && response.status < 300){
        const resp = await response.json();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('token_access', resp.access);
        localStorage.setItem('token_refresh', resp.refresh);
        window.location.href = '/';
      } else {
        alert("Incorrect Login or Password")
      }
    } catch (e) {
      alert("Incorrect Login or Password");
    }
  };
  render() {
    return (
      <div className="nasa-registration-form">
        <h1>Login Form</h1>
        <form onSubmit={this.OnFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              value={this.state.username}
              onChange={this.OnUsernameChange}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              value={this.state.password}
              onChange={this.OnPasswordChange}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
