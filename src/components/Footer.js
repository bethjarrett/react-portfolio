import React from "react";
import logo from "./img/beejar.svg"


class Footer extends React.Component {
  render() {
    return(
<footer id="contact" className="footer text-center text-white">
  <div className="container">
    <h1>Contact</h1>
    <p>You can find me here:</p>
    <ul className="list-inline mb-5">
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="mailto: bethjarrett@gmail.com"><i className="icon-envelope" /></a></li>
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="https://www.linkedin.com/in/jarrettbeth/" target="_blank"><i className="icon-social-linkedin" /></a></li>
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="https://github.com/bethjarrett" target="_blank"><i className="icon-social-github" /></a></li>
    </ul>
  </div>
  <img src={logo} alt="Logo: a bee in a jar" className="footer-logo"/>
  <h2 className="mb-0 small">© Beth Jarrett 2022</h2>
</footer>

    )
  }
}
export default Footer;