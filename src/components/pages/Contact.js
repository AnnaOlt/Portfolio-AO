import React from "react";

const Contact = () => (
  <div>
    <div id="contact" className="container">
      <div className="card mb-4">
        <div className="card-header">
          <h3>Contact Me!</h3>
        </div>
        <div id="contact" className="card-body">
          <p> Connect with me:</p>
          <a href="https://www.linkedin.com/in/anna-olt-7356a4100/">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <p> Resume:</p>
          <a href="https://docs.google.com/document/d/1fFqWJuKUMqtBKicn7bpIwuyxIvXpwATVfnS9tIgmIQE/edit#heading=h.y7d3xdxnr44m">
            <i class="far fa-file fa-3x"></i>
          </a>
          <p> My Repos:</p>
          <a href="https://github.com/AnnaOlt">
            <i class="fab fa-github-square fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
