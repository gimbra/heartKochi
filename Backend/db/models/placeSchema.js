import { Schema, model } from 'mongoose';

const placeSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
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

const Place = model('Place', placeSchema);

export default Place;
