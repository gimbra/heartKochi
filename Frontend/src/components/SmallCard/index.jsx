import './smallcard.css';

const SmallCard = props => {
  return (
    <div className="smallcard" onClick={props.onClick}>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default SmallCard;
