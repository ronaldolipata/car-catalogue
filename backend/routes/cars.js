import { Router } from 'express';
import addCar from '../controllers/cars/addCar.js';

const router = new Router();

router.post('/create', addCar);

export default router;
