import React from "react";

const Projects = () => (
  <div>
    <div id="projCont" className="container">
      <div className="card mb-4">
        <div className="card-header">
          <h3>Would You Rather</h3>
        </div>
        <div className="card-body">
          <a href="https://would--you--rather.herokuapp.com/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh2-kqGd5e6-2PFxjnoBhr-RDVnvUOin3QgX4i6WMh-u0PFEm0&usqp=CAU"
              class="img-responsive"
              width="100%"
              alt="Image"
            />
          </a>
          <p>
            A hilarious an interactive game of choice that sparks conversation.
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Planthood</h3>
        </div>
        <div className="card-body">
          <a href="https://planthood.herokuapp.com/">
            <img
              src="../landinglogo2.png"
              class="img-fluid"
              alt="Responsive image"
            />
          </a>
          <p>A plant management app that let's anyone havea green thumb!</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Food Radar</h3>
        </div>
        <div className="card-body">
          <a href="https://vartanyane.github.io/project-1/">
            <img
              src="assets/Screen Shot 2020-04-18 at 5.36.02 PM.png"
              class="img-responsive"
              width="100%"
              alt="Image"
            />
          </a>
          <p>An app to find local eats based on your location.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
