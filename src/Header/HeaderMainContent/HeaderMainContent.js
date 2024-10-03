import "./HeaderMainContent.css";

function HeaderMainContent() {
  return (
    <div className="container mainContainer">
      <div className="mainContent">
        <h1 className="mainContentHeader">Nasza firma oferuje najwyższej jakości produkty.</h1>
        <h2 className="mainContentSubHeader">Nie wierz nam na słowo - sprawdź!</h2>
        <a className="offerBtn" href="#offer">
          Oferta
        </a>
      </div>
    </div>
  );
}

export default HeaderMainContent;
