import Car from '../../models/Car.js';

export default async function addCar(req, res) {
  const newCar = new Car(req.body);

  try {
    const car = await newCar.save();
    return res.status(201).json(car);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
