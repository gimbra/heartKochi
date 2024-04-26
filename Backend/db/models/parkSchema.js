import { Schema, model } from 'mongoose';

const parkSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String },
    image: {
      type: String,
    },
    ratings: [{ type: Number }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    spots: [{ type: Schema.Types.ObjectId, ref: 'Spots' }],
  },
  { timestamps: true }
);

const Park = model('Park', parkSchema);

export default Park;
