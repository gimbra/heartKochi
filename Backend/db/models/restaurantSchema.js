import { Schema, model } from 'mongoose';

const restaurantSchema = Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String },
    ratings: [{ type: Number }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    place: { type: Schema.Types.ObjectId, ref: 'Place' },
    image: {
      type: String,
    },
    location: {
      coordinates: {
        type: [Number], // Array of [longitude, latitude]
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;
