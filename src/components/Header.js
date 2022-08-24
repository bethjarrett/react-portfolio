import React from "react";
import "./style.css";
import "./bootstrap.min.css"

class Header extends React.Component {
  render() {
    return(
      <header className="d-flex position-relative home-img vh-100 text-center" id="home">
        <div className="display-middle sticker-container">
          <div className="display-topmiddle">
            <p className="opacity-min composition-book">COMPOSITION BOOK</p>
          </div>
          <h1>Beth Jarrett</h1>
          <hr className="opacity-min composition-line" />
          <h2 className="title-h2">Web Developer</h2>
        </div>
      </header>
    )
  }
}
export default Header;