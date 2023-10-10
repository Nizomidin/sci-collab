import React, { Component } from "react";
import logo from "./images/logo.jpg";
import search from "./images/svg/search-globe.svg";
import banner from "./images/banner.png"
import nasa from "./images/svg/nasa.svg"
import asd from "./images/asd.jpg"
import ash from "./images/ash.jfif"
import "./profile.css";
const host = "http://185.244.48.91:8000/";
var is_loaded = false;
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categroies: [],
      projects: [],
      filter: [],
    };
  }
  CheckImage = (images) => {
    if (images[0] == undefined) return null;
    return images[0].original_url;
  };
  PostHTML = (project) => {
    let tags = "";
    for (let tag of project.categories) {
      tags += `<li>${tag.name}</li>`;
    }
    let code = `<div class="project1">
    <table border="0" class="project_table">
        <!--1-->
        <tr>
            <td colspan="8" class="td_name"><span>${project.name}</span></td>
            <td><button class="view_more">View more</button></td>
        </tr>
        <!--2-->
        <tr>
            <td colspan="4" class="td_image"><img src="${this.CheckImage(
              project.images
            )}" class="project_image"></td>
            <td colspan="5" rowspan="2" class="description"><p><span>Description:</span>${project.description.slice(
              0,
              200
            )}...</p></td>
        </tr>
        <!--3-->
        <tr>
            <td colspan="3" class="td_apply"><a href="">Apply</a></td>
            <td class="td_svg">                            
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z" fill="#ffffff"/> </g>
                </svg>                            
            </td>
        </tr>
        <!--4-->
        <tr>
            <td><span>${project.likes_count}</span></td>

            <td class="td_svg">                            
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>                                
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>                                
                    <g id="SVGRepo_iconCarrier">                                
                    <path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#ffffff"/>                                
                    </g>                                
                </svg>
            </td>


            <td><span>${project.downloads_count}</span></td>

            <td class="td_svg" class="file_download">
                <svg class="file_download" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>                                
                    <g id="SVGRepo_iconCarrier"> <path d="M11.2798 22H7.00977C5.9489 22 4.93148 21.5785 4.18134 20.8284C3.43119 20.0782 3.00977 19.0609 3.00977 18V14.89C3.00977 11.4713 4.36781 8.19273 6.78516 5.77539C9.2025 3.35805 12.4811 2 15.8998 2H17.0098C18.0706 2 19.0881 2.42142 19.8382 3.17157C20.5883 3.92172 21.0098 4.93913 21.0098 6V11.4399" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 15.06C3 9.9 8.50004 14.0599 11.73 10.8199C14.96 7.57995 10.83 2 15.98 2" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.1895 15V23" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21.1895 20L18.1895 23" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.1895 20L18.1895 23" stroke="#ffffff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> </g>                                
                </svg>   
            </td>

            <td><span>${project.comments_count}</span></td>

            <td class="td_svg">
                <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                    <path fill="#ffffff" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-4.172a1 1 0 0 0-.707.293l-1.867 1.867C11.054 22.361 9 21.51 9 19.812A.812.812 0 0 0 8.188 19H5a3 3 0 0 1-3-3V6zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7z" clip-rule="evenodd"/>
                    </g>
                </svg>
            </td>
           

            <td colspan="3">                            
                <ol class="tags">
                    <span>Tags: </span>
                    ${tags}
                </ol>
            </td>
        </tr>
    </table>
</div>`;
    return code;
  };
  LoadPosts = async () => {
    console.log("FILTERS", this.state.filter);
    const response = await fetch(
      host + "/api/v1/handbook/categories/projects/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: '{\n  "categories": []\n}',
        body: JSON.stringify({
          categories: this.state.filter,
        }),
      }
    ).then((res) => res.json());
    const projects = response;
    let feed = document.getElementById("projects");
    let code = "";
    for (let project of projects) {
      code += this.PostHTML(project);
    }
    feed.innerHTML = code;
    this.setState({
      projects: projects,
    });
    console.log(projects);
  };
  async componentDidMount() {
    if (is_loaded) return;
    is_loaded = true;
    this.LoadPosts();

    const response = await fetch(host + "api/v1/handbook/categories/", {
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();

    this.setState({
      categories: data.results,
    });

    const list = document.getElementById("categories");
    for (let c of data.results) {
      const divElement = document.createElement("div");
      divElement.className = "list-item";
      divElement.textContent = c.name;

      divElement.addEventListener("click", () => {
        const f = [...this.state.filter];

        if (f.includes(c.slug)) {
          const index = f.indexOf(c.slug);
          if (index !== -1) {
            f.splice(index, 1);
            divElement.style.border = "2px solid #114683";
            divElement.style.color = "white";
            divElement.style.background = "black";
          }
        } else {
          f.push(c.slug);
          divElement.style.border = "2px solid #114683";
          divElement.style.backgroundColor = "white";
          divElement.style.color = "#114683";
          divElement.style.fontWeight = "bold";
        }

        this.setState({ filter: f }, async () => {
          // The state has been updated, you can access it here
          console.log(this.state.filter);

          // Assuming LoadPosts is an async function, await it here
          await this.LoadPosts();

          console.log(this.state.projects);
        });
      });

      list.appendChild(divElement);
    }
  }

  OnLogoutClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  IsLogined = () => {
    if (localStorage.getItem("username") != null) {
      return (
        <>
          <button onClick={this.OnLogoutClick} className="header_table_button2">
            Logout({localStorage.getItem("username")})
          </button>
        </>
      );
    } else
      return (
        <>
          <td className="t6">
            <a href="login">
              <button className="header_table_button1">Sign in</button>
            </a>
          </td>
          <td className="t7">
            <a href="register">
              <button className="header_table_button2">Sign up</button>
            </a>
          </td>
        </>
      );
  };
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
        <title>Sci Collab Net</title>
        <link rel="stylesheet" href="styles/index.css" type="text/css" />
        <link rel="stylesheet" href="styles/main.css" type="text/css" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        #main{\n            height: 2520px !important;\n        }\n    ",
          }}
        />
        <div id="header_out">
          <div id="header">
            <table border={0} className="header_table">
              <tbody>
                <tr>
                  <td className="t1">
                    <a href="/">
                      <img src={logo} alt="logo" />
                    </a>
                  </td>
                  <td className="t2">
                    <a href="profile">Profile</a>
                  </td>
                  <td className="t3">
                    <a href="chats">Chat</a>
                  </td>
                  <td className="t4">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="header_table_input"
                    />
                  </td>
                  <td className="t5">
                    <a href="search">
                      <img src={search} alt="search" />
                    </a>
                  </td>
                  {this.IsLogined()}
                </tr>
              </tbody>
            </table>
          </div>
          {/* header */}
        </div>
        {/* header_out */}
        <div id="main">
          <div className="scroll1">
            <div id="categories" className="list-container"></div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                .project_table svg:hover path{\n                    fill: #f6435d;\n                }\n                .file_download svg:hover path{\n                    stroke: #f6435d !important; \n                }\n                .scroll1{\n                    width: 90%;\n                    height: 300px;\n                    margin-left: 10%;\n                    /* background-color: aqua; */\n                }              \n                .list-container {\n                  overflow-x: scroll;\n                  white-space: nowrap;\n                }\n                .list-item {\n                  display: inline-block;\n                  color: white;\n                  width: fit-content;\n                  border: 2px solid #114683;\n                  border-radius: 20px;\n                  font-size: 30px;\n                  margin-left: 6%;\n                  padding: 5px 8px;\n                  margin-top: 150px;\n                  margin-bottom: 20px;\n                  box-shadow: 5px 5px 5px 0px rgba(14, 34, 255, 0.26);\n                  cursor: pointer;\n                }\n                .list-item:hover{\n                    border: 2px solid #114683;\n                    background-color: white;\n                    color: #114683;\n                    font-weight: bold;\n                }\n                ::-webkit-scrollbar {\n                    width: 8px; /* ширина скроллбара */\n                }\n                ::-webkit-scrollbar-track {\n                    background-color: #222134; /* цвет фона трека скроллбара */\n                }\n                ::-webkit-scrollbar-thumb {\n                    background: linear-gradient(to right bottom, #5e83ad, #1e528d, #0e3f76, #092a4f); /* цвет ползунка скроллбара */\n                    border-radius: 8px; /* скругление углов ползунка */\n                }\n                ::-webkit-scrollbar-thumb:hover {\n                    background: linear-gradient(to right bottom, #8a72b9, #503488, #3f1b86, #1b0744); /* цвет ползунка при наведении на него курсора */\n                }\n            ",
              }}
            />
          </div>
          {/* scroll1 */}
          <div id="poster">
            <img src={banner} width="100%" />
        </div>
          <div id="projects">
            <h1 className="zagolovok">Projects</h1>

            {/*project 1*/}
            {/*project 4*/}
          </div>
        </div>
        {/* main */}
        <>
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
                      <a href="main.html">Main</a>
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
                      <a href="chats">Chat</a>
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
        </>
      </div>
    );
  }
}
