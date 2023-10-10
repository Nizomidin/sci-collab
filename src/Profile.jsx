import React, { Component } from "react";
import "./index.css";
import logo from "./images/logo.jpg";
import search from "./images/svg/search-globe.svg";
import banner from "./images/banner.png";
import nasa from "./images/svg/nasa.svg";
import asd from "./images/asd.jpg";
import ash from "./images/ash.jfif";
import "./profile.css";
import "./main.css";
const host = "http://185.244.48.91:8000/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      categories: [],
      phone: "",
      email: "",
      description: "",
    };
  }
  RefreshToken = async () => {
    const new_token = await fetch(host + "/api/v1/account/token/refresh/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFTOKEN":
          "3DSg3GsqC9oFLqooNSashgLysAa8nRgeqtuM2f5lu9CQnEZAjZ8QU96fkUZB9DEb",
      },
      // body: '{\n  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5Njg3MDA1MSwiaWF0IjoxNjk2NzgzNjUxLCJqdGkiOiI4MjZjOWY4MGFmZTI0YmNkYmM3YTQzMDEwMzViZjEzOSIsInVzZXJfaWQiOjF9.NYHkVLPNp2AycHyQ3ZmS5rLH72JRZVWIC2X_lAkiAsk"\n}',
      body: JSON.stringify({
        refresh: localStorage.getItem("token_refresh"),
      }),
    })
      .then((res) => res.json())
      .then((json) => json.access);
    localStorage.setItem("token_access", new_token);
  };
  GetInfo = async () => {
    const response = await fetch(host + "/api/v1/account/clients/profile/", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token_access"),
      },
    }).then((res) => res.json());
    this.setState({
      first_name: response.first_name,
      last_name: response.last_name,
      categories: response.categories,
      username: response.user.username,
      phone: response.user.phone,
      email: response.user.email,
      description: response.description,
    });
  };
  OnFirstNameChange = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };
  OnLastNameChange = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };
  OnDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  OnProfileEdit = () => {
    this.RefreshToken();
    fetch(host + "/api/v1/account/clients/profile/", {
      method: "PUT",
      headers: {
        accept: "application/json",
        Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2Nzg3NTM3LCJpYXQiOjE2OTY3ODM2NTEsImp0aSI6IjM2MjU4ZWRjZGNiNzRkOWI5ZjM2MmJmOTcwMWRlMGQwIiwidXNlcl9pZCI6MX0.fG_hDslY_SBOFG-hmF1MP_yDgn4yCNBXNRCGUFXTfiI",
        "Content-Type": "application/json",
      },
      // body: '{\n  "first_name": "First",\n  "last_name": "last",\n  "description": "asd;aslkd;laskdas"\n}',
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        description: this.state.description,
      }),
    });
  };
  componentDidMount() {
    this.GetInfo();
  }
  render() {
    return (
      <>
        <div>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href={logo} type="image/x-icon" />
          <title>Sci Collab Net</title>
          <link rel="stylesheet" href="styles/index.css" type="text/css" />
          <link rel="stylesheet" href="styles/profile.css" type="text/css" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n        #main{\n            height: 1200px !important;\n        }\n    ",
            }}
          />
          <div id="header_out">
            <div id="header">
              <table border={0} className="header_table">
                <tbody>
                  <tr>
                    <td className="t1">
                      <a href="main.html">
                        <img src={logo} alt="logo" />
                      </a>
                    </td>
                    <td className="t2">
                      <a href="main.html">Projects</a>
                    </td>
                    <td className="t3">
                      <a href="chats.html">Chat</a>
                    </td>
                    <td className="t4">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="header_table_input"
                      />
                    </td>
                    <td className="t5">
                      <a href="search.html">
                        <img src={search} alt="search" />
                      </a>
                    </td>
                    <td className="t6">
                      <a href="sign_in.html">
                        <button className="header_table_button1">
                          Sign in
                        </button>
                      </a>
                    </td>
                    <td className="t7">
                      <a href="sign_up.html">
                        <button className="header_table_button2">
                          Sign up
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* header */}
          </div>
          {/* header_out */}
          <div id="main">
            <h1 className="zagolovok">My Profile</h1>
            {/* <div class="profile1_out"> */}
            <div className="profile1">
              <ol>
                <input
                  onChange={this.OnFirstNameChange}
                  value={this.state.first_name}
                />
                <input
                  onChange={this.OnLastNameChange}
                  value={this.state.last_name}
                />
                <input value={this.state.username}></input>
                <input readOnly value={this.state.email}></input>
                <input value={this.state.phone}></input>
              </ol>
            </div>
            {/* 1 */}
            {/* </div> */}
            {/* <div class="profile2_out"> */}
            <div className="profile2">
              <ol>
                <li>
                  <img
                    src="images/avatar.jpg"
                    alt="avatar"
                    className="avatar"
                  />
                </li>
                <textarea
                  onChange={this.OnDescriptionChange}
                  value={this.state.description}
                  className="profile2_text"
                ></textarea>
                <li>
                  <a href="#">
                    <button
                      onClick={this.OnProfileEdit}
                      className="profile_button"
                    >
                      Edit profile
                    </button>
                  </a>
                </li>
              </ol>
            </div>
            {/* 2 */}
            {/* </div> */}
          </div>
          {/* main */}
          <div id="footer_out">
            <div id="footer">
              <table border={0} className="footer_table">
                <tbody>
                  <tr>
                    <td colSpan={4}>
                      Sci Collab Net - encompasses various key components that
                      work <br /> seamlessly together to provide a comprehensive
                      user experience.
                    </td>
                    <td>
                      <a href="/">Main</a>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>
                      <img src={logo} className="sci" />
                    </td>
                    <td rowSpan={3}>
                      <img src={nasa} className="nasa" />
                    </td>
                    <td rowSpan={3}>
                      <img src={asd} className="nasa" />
                    </td>
                    <td rowSpan={3}>
                      <img src={ash} className="ash" />
                    </td>
                    <td>
                      <a href="/">Projects</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="profile">Profile</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="chats.html">Chat</a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="copy">
                      © 2023 | Sci Collab Net
                    </td>
                    <td className="copyright">
                      Copyright by Code Beyond Earth
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* footer */}
          </div>
          {/* footer_out */}
        </div>
      </>
    );
  }
}
