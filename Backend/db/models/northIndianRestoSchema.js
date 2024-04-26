import { Schema, model } from 'mongoose';

const northIndianRestoSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String },
    image: {
      type: String,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    restaurant: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  },
  { timestamps: true }
);

const NorthIndianResto = model('NorthIndianResto', northIndianRestoSchema);

export default NorthIndianResto;
