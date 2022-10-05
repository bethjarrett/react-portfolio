import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Skills() {
    const [skills, jsonSkills] = useState([]);

    useEffect(() => {
        axios.get('./json/skillsData.json')
            .then(res => {
                jsonSkills(res.data);
            })
            .catch(err => {
                console.log("Error: skillData JSON did not properly convert.");
            })
    }, [])

    return (
        <>
          <section id="skills" className="content-section text-dark text-center skills">
            <div className="container">
              <div className="content-section-heading">
                <h2 className="mb-5">Skills</h2>
                  <div className="row">
                  {
                    skills.map(s => (
                      <div key={s.id} className="col-4 col-sm-2 text-center mb-4">
                        <img src={s.image} className="skills-img pb-3" alt={s.name} />
                        <p className="mb-4 opacity-min">{s.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>
        </ >
    )
}