import { useState } from 'react';
import './placecard.css';

const PlaceCard = props => {
  const [color, setColor] = useState('black');
  // const[data,setData]=useState([])
  const onIconClick = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };
  return (
    <div className="placecard" onClick={props.onClick}>
      <i
        className="fa-regular fa-heart"
        onClick={onIconClick}
        style={{ color: color }}
      ></i>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default PlaceCard;
