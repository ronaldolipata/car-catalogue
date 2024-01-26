import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const carSchema = new Schema(
  {
    carModel: {
      brand: {
        type: String,
        require: true,
      },
      model: {
        type: String,
        require: true,
      },
      year: {
        type: String,
        require: true,
      },
      color: {
        type: String,
        require: true,
      },
    },
  },
  { timestamps: true }
);

const Car = model('Car', carSchema);
export default Car;
