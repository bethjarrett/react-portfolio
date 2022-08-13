import React from "react";
import profile from "./img/profile.jpg"


class About extends React.Component {
    render() {
      return(
<section id="about" className="about">
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={profile} className="d-block mx-lg-auto img-fluid" alt="A profile of the developer." />
      </div>
      <div className="col-lg-6">
        <h3>I live to write.</h3>
        <h2>These days, it's code.</h2>
        <p>Before, I wrote about my time living in South Korea for my <a href="https://scholar.uwindsor.ca/etd/8371/">Master's thesis</a>.</p>
        <p>Now, it's accessible web applications with thoughtful UI.</p>
        <p>I have a special interest in database development, specifically in database design. I also have a passion for making exciting front-end websites. <strong>I'm a true full-stack developer</strong>.</p>
        <p>I recently completed Humber College's Graduate Certificate in Web Development.</p>
      </div>
    </div>
  </div>
</section>

      )
    }
  }
  export default About;