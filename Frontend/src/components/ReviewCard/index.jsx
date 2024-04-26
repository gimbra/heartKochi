import ReactStars from 'react-rating-stars-component';
import './reviewcard.css';

const ReviewCard = props => {
  const ratingChanged = newRating => {
    console.log(newRating);
  };
  return (
    <div className="reviewcard">
      <div className="star">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <h2>{props.description}</h2>
    </div>
  );
};

export default ReviewCard;
