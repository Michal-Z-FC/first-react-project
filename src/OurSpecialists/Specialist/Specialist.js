import "./Specialist.css";

function Specialist(props) {
  return (
    <div className="specialist" key={props.key}>
      <div className="specialistImageContainer" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
      <div className="specialistTextContent">
        <p className="textBolder">
          {props.name} {props.surname} [{props.position}]
        </p>
        <p class="textDefault">{props.description}</p>
      </div>
    </div>
  );
}

export default Specialist;
