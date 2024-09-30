import Menu from "./Menu/Menu";
import "./Header.css";
import HeaderMainContent from "./HeaderMainContent/HeaderMainContent";
import bgImage from "./images/header-background.webp";
import logotype from "./images/logo.svg";

function Header() {
  return (
    <header id="header" className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="nav">
        <div className="container">
          <a href="#header" className="logo">
            <img src={logotype} alt="Logotyp MyCom" />
          </a>
          <Menu contactBtnIsDisable={true}></Menu>
        </div>
      </nav>
      <HeaderMainContent />
    </header>
  );
}

export default Header;
