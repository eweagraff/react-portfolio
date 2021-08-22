import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  console.log(currentPage);

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    console.log(currentPage);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
