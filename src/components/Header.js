import React from "react";
import "./style.css";
import "./bootstrap.min.css"

class Header extends React.Component {
  render() {
    return(
        <header className="d-flex masthead" id="home">
        <div className="container my-auto text-center sticker-container">
          <h1>Beth Jarrett</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
    )
  }
}
export default Header;