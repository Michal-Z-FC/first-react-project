import "./HeaderMainContent.css";

function HeaderMainContent() {
  return (
    <div className="container mainContainer">
      <div className="mainContent">
        <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
        <h2>Nie wierz nam na słowo - sprawdź!</h2>
        <a className="offerBtn" href="#oferta">
          Oferta
        </a>
      </div>
    </div>
  );
}

export default HeaderMainContent;
