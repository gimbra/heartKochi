import { Schema, model } from 'mongoose';

const chineseRestoSchema = Schema(
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

const ChineseResto = model('ChineseResto', chineseRestoSchema);

export default ChineseResto;
