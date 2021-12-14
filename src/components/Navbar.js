const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="navbar">
  
      <ul>
        <div className="links">
          <li>
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              <button className="btn btn-lg ">Projects</button>
            </a>
          </li>
          <li>
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <button className="btn btn-lg ">About Me</button>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              <button className="btn btn-lg ">Contact</button>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              <button className="btn btn-lg">Resume</button>
            </a>
          </li>
        </div>
      </ul>
     </nav>
  );
};

export default Navbar;
