import { Schema, model } from 'mongoose';

const spotSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {
      type: String,
    },
    place: { type: Schema.Types.ObjectId, ref: 'Place' },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number], // Array of [longitude, latitude]
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Spots = model('Spots', spotSchema);

export default Spots;
