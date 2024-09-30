import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerContainer">
        <p>MyCom - wszelkie prawa zastrzeżone {new Date().getFullYear()}</p>
        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
