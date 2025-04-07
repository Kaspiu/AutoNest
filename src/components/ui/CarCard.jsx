import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const CarCard = ({
  brand,
  model,
  year,
  horsepower,
  torque,
  gearbox,
  driveSystem,
  topSpeed,
  speedMilestone,
  url,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="carCard">
      <img src={url} alt={`${brand} ${model}`} />

      <button
        className="delCarCardBtn"
        onClick={onDelete}
        aria-label="Delete car"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <button className="editCarCardBtn" onClick={onEdit} aria-label="Edit car">
        <FontAwesomeIcon icon={faPen} />
      </button>

      <div className="bottomCardSide">
        <div className="leftCardSide">
          <h1>{`${brand} ${model} ${year}`}</h1>
          <p>{`${horsepower}hp, ${torque}Nm`}</p>
          <p>Top Speed: {topSpeed}km/h</p>
          <p>0-100km/h: {speedMilestone}sec</p>
        </div>
        <div className="rightCardSide">
          <h1>
            {driveSystem} <br /> {gearbox}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
