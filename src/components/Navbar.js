const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="navbar">
      <span className="mx-auto">Emily Weagraff</span>
      <span className="mx-auto"> Full Stack Developer</span>

      <img
        src="./assets/images/Em.jpg"
        alt="personal"
        width="400px"
        id="personal_photo"
      />

      <div className="links">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          <button className="btn btn-lg btn-light m-2">Projects</button>
        </a>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-lg btn-light m-2">About Me</button>
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-lg btn-light m-2">Contact</button>
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-lg btn-light m-2">Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
