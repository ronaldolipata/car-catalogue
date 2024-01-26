import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const carSchema = new Schema({
  carModel: {
    brand: String,
    model: String,
    year: String,
    color: String,
  },
});

const Car = model('Car', carSchema);
export default Car;
