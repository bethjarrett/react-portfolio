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
          <section id="skills" className="content-section text-white text-center skills">
            <div className="container">
              <div className="content-section-heading">
                <h2 className="mb-5">Skills</h2>
                  {
                    skills.map(s => (
                      <span key={s.id}>
                        <img src={s.image} className="skills-img pb-3" alt={s.name} />&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    ))
                  }
              </div>
            </div>
          </section>
        </ >
    )
}