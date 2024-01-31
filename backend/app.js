import express from 'express';
import process from 'node:process';
import dotenv from 'dotenv';
import mongooseService from './services/mongooseService.js';
import cors from 'cors';

dotenv.config();

const app = express();

mongooseService(
  process.env.DB_HOST,
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.set('port', PORT);

export default app;
