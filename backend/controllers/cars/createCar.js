import Car from '../../models/Car';

export default async function createCar(req, res) {
  const { carModel } = req.body;

  const newCar = new Car({
    carModel: {
      brand: carModel.brand,
      carModel: carModel.carModel,
      year: carModel.year,
      color: carModel.color,
    },
  });

  try {
    const car = await newCar.save();
    return res.status(201).json(car);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
