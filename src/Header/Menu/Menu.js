import "./Menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <a className="menuBtn" href="#aboutUs">
          O nas
        </a>
      </li>
      <li>
        <a className="menuBtn" href="#offer">
          Oferta
        </a>
      </li>
      <li>
        <button className="menuBtn disabled">Kontakt</button>
      </li>
    </ul>
  );
}

export default Menu;
