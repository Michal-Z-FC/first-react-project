import "./Menu.css";

function Menu(props) {
  return (
    <ul className="menu">
      <li>
        <a className="btn" href="#oNas">
          O nas
        </a>
      </li>
      <li>
        <a className="btn" href="#oferta">
          Oferta
        </a>
      </li>
      <li>
        {props.contactBtnIsDisable ? (
          <button className="btn disabled">Kontakt</button>
        ) : (
          <a className="btn" href="#kontakt">
            Kontakt
          </a>
        )}
      </li>
    </ul>
  );
}

export default Menu;
