import "./CompanyService.css";

function CompanyService(props) {
  const serviceClassName = `service ${props.isNew ? "newService" : ""}`;

  return (
    <div className={serviceClassName}>
      <h4 className="serviceName">{props.name}</h4>
      <span className="new">(nowość)</span>
    </div>
  );
}

export default CompanyService;
