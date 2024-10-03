import Menu from "./Menu/Menu";
import "./Header.css";
import HeaderMainContent from "./HeaderMainContent/HeaderMainContent";
import logotype from "./images/logo.svg";

function Header() {
  return (
    <header id="header" className="header">
      <nav className="nav">
        <div className="container navContainer">
          <a href="#header" className="logoLink">
            <img src={logotype} alt="Logotyp MyCom" className="logoImage" />
          </a>
          <Menu />
        </div>
      </nav>
      <HeaderMainContent />
    </header>
  );
}

export default Header;
