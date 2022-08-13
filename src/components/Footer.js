import React from "react";

class Footer extends React.Component {
  render() {
    return(
<footer id="contact" className="footer text-center">
  <div className="container">
    <ul className="list-inline mb-5">
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="mailto: bethjarrett@gmail.com"><i className="icon-envelope" /></a></li>
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="https://www.linkedin.com/in/jarrettbeth/"><i className="icon-social-linkedin" /></a></li>
      <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="https://github.com/bethjarrett"><i className="icon-social-github" /></a></li>
    </ul>
  </div>
  <p className="mb-0 small">© Beth Jarrett, Summer 2022</p>
</footer>

    )
  }
}
export default Footer;