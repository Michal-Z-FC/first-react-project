import "./Specialist.css";

function Specialist(props) {
  return (
    <div className="specialist" key={props.key}>
      <img width={150} height={150} src={props.imageUrl} alt={`Zdjęcie specjalisty ${props.name} ${props.surname}`} />
      <div className="textContent">
        <p className="bolder">
          {props.name} {props.surname} [{props.position}]
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Specialist;
