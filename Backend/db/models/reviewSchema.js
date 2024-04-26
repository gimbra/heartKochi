import { Schema, model } from 'mongoose';

const reviewSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String },
    text: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Review = model('Review', reviewSchema);

export default Review;
