import { useState } from 'react';
import './style.css';

const SuperCard = props => {
  const [color, setColor] = useState('black');
  // const[data,setData]=useState([])
  const onIconClick = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };
  return (
    <div className="supercard" onClick={props.onClick}>
      {/* <i
        className="fa-regular fa-heart"
        onClick={onIconClick}
        style={{ color: color }}
      ></i> */}
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className='star'>{props.ratings}</div>
    </div>
  );
};

export default SuperCard;
