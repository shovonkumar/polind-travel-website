import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [navBg, setNavBg] = useState(true);
  const [search, setSearch] = useState(false);
  const [inputVal, setInputVal] = useState("");

  //for add background to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(!search);
  };
  return (
    <nav
      className={`navbar navbar-dark navbar-expand-lg ${navBg ? "nav-bg" : ""}`}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Website logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3 gap-lg-5 justify-content-end align-items-center flex-grow-1">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guide
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Journey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Travelers
                </a>
              </li>
              <li className="nav-item">
                {search ? (
                  <form className="position-relative" onSubmit={handleSubmit}>
                    <input
                      className={search ? "w-auto" : "d-none"}
                      type="text"
                      placeholder="Search Anything..."
                      aria-label="Search"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                    />
                    <button className="nav-btn" type="submit" title="Search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                ) : (
                  <i
                    className="fa-solid fa-magnifying-glass d-inline-block"
                    onClick={() => setSearch(!search)}
                  ></i>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
