import Specialist from "./Specialist/Specialist.js";
import "./OurSpecialists.css";
import employeesData from "./data.js";

function OurSpecialists() {
  return (
    <section id="oNas" className="ourSpecialists">
      <div className="container">
        <h3>Nasi specjaliści</h3>
        <div className="specialistsContent">
          {employeesData.map((employee, index) => {
            const imageUrl = employee.imageUrl && employee.imageUrl.trim() !== "" ? employee.imageUrl : "images/avatar.webp";
            return <Specialist key={index} imageUrl={imageUrl} name={employee.name} surname={employee.surname} description={employee.description} position={employee.position} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default OurSpecialists;
