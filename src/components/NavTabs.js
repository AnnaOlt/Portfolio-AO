import React from "react";

function NavTabs(props) {
  return (
    <ul id="navList" className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          <i class="fas fa-home fa-2x"></i>
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.handlePageChange("Projects")}
          className={
            props.currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          <i class="fas fa-code fa-2x"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          <i className="far fa-envelope fa-2x" />
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
