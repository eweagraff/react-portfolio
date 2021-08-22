const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="navbar">
      <h1>Emily Weagraff</h1>
      <div className="links">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
        <a
          href="/"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
        <a
          href="/contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
        <a
          href="/resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
