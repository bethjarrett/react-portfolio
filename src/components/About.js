import React from "react";
import profile from "./img/profile.jpg"
import york from "./schoolimg/yu.png"
import windsor from "./schoolimg/uwin.gif"
import ocad from "./schoolimg/ocadu.png"
import humber from "./schoolimg/humber.svg"

class About extends React.Component {
    render() {
      return(
<section id="about" className="py-5">
  <div className="container col-xxl-8 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-4 py-5">
      <div className="col-md-auto">
        <img src={profile} className="d-block mx-lg-auto img-fluid" alt="A profile of the developer." />
      </div>
      <div className="col">
        <h3>I live to write.</h3>
        <h2 className="about-h2">These days, it's code.</h2>
        <p>Before, I wrote about my time living in South Korea for my <a href="https://scholar.uwindsor.ca/etd/8371/" className="link">Master's thesis</a>.</p>
        <p>Now, it's accessible web applications with thoughtful UI.</p>
        <p>I have a special interest in database development, specifically in database design. I also have a passion for making exciting front-end websites. <strong>I'm a true full-stack developer</strong>.</p>
        <h3 className="pt-2 pb-4 edu">Education:</h3>
        <div class="row">
          <div class="col-5 col-sm-3 text-center">
            <p><img src={humber} className="school-img" alt="Humber College logo" /></p>
            <p className="cert-name">Graduate Certificate</p>
            <p>Web Development</p>
          </div>
          <div class="col-5 col-sm-3 text-center">
            <p><img src={ocad} className="school-img" alt="OCADU logo" /></p>
            <p className="cert-name">Micro-Credential</p>
            <p>Intro to UX Design</p>
          </div>
          <div class="col-5 col-sm-3 text-center">
            <p><img src={windsor} className="school-img" alt="University of Windsor logo" /></p>
            <p className="cert-name">Master of Arts</p>
            <p>Creative Writing & English Literature</p>
          </div>
          <div class="col-5 col-sm-3 text-center">
            <p><img src={york} className="school-img" alt="York University logo" /></p>
            <p className="cert-name">Bachelor of Arts</p>
            <p>English Literature, Honours</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      )
    }
  }
  export default About;