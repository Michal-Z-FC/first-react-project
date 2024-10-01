import "./Specialist.css";

function Specialist(props) {
  return (
    <div className="specialist" key={props.key}>
      <div className="imageContainer" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
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
