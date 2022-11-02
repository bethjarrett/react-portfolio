import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [projects, jsonProjects] = useState([]);
  
  useEffect(() => {
    axios.get('./json/projectsData.json')
      .then(res => {
        jsonProjects(res.data);
        })
        .catch(err => {
          console.log("Error: projectsData JSON did not properly convert.");
        })
    }, [])

    

    return (
        <>
          <section id="portfolio">
            <div className="portfolio-header position-relative">
              <div className="display-middle">
              <h2 className="label-maker">Portfolio</h2>
              </div>
            </div>
            <div className="container py-4 py-xl-5 ">
              <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                  <p className="w-lg-50">Here are some of my latest projects:</p>
                </div>
              </div>
              <div className="row gy-4 row-cols-1 row-cols-md-2">
                {
                  projects.map(p => (
                    <span key={p.id}>
                      <div className="col py-sm-4">
                        <div className="d-flex flex-column flex-lg-row">
                          <div> 
                            <img className="rounded d-block fit-cover portfolio-img" src={p.image} alt={p.title}/>
                          </div>
                            <div className="py-4 py-lg-0 px-lg-4">
                              <h4>{p.title}</h4>
                              <h5>{p.skills}</h5>
                              <p>{p.content}</p>
                              <a href={p.url} className="btn btn-primary">Demo</a>
                              <a href={p.githuburl} className="btn btn-primary ms-2">GitHub</a>
                            </div>
                          </div>
                        </div>
                    </span>
                        ))
                    }
              </div>
            </div>
          </section>
        </ >
    )
}