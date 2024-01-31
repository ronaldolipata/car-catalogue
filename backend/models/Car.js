import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const carSchema = new Schema(
  {
    carModel: {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Car = model('Car', carSchema);
export default Car;
