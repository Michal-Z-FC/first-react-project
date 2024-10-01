import CompanyService from "./CompanyService/CompanyService";
import "./CompanyServices.css";
import services from "./data.js";

function CompanyServices() {
  return (
    <section id="oferta" className="companyServices">
      <div className="container">
        <h3>Czym zajmuje się nasza firma?</h3>
        <div className="servicesContent">
          {services.map((item, index) => {
            return <CompanyService name={item.name} isNew={item.isNew} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CompanyServices;
