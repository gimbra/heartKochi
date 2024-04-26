import ReviewCard from '../../components/ReviewCard';
import './review.css';

const Review = () => {
  return <div className="review">
    <div className="contain">
      <h1>Reviews</h1>
      <ReviewCard />
    </div>
  </div>;
};

export default Review;