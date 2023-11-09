import footerLogo from "../../assets/images/footerLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img src={footerLogo} alt="Footer Logo" />
        <p>All rights reserved by Polind</p>
        <span>
          Made by
          <a
            href="https://shovonkumar.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            Shovon
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
