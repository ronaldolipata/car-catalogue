import express from 'express';
import process from 'node:process';
import dotenv from 'dotenv';
import mongooseService from './services/mongooseService.js';

dotenv.config();

const app = express();

mongooseService(
  process.env.DB_HOST,
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

const PORT = process.env.PORT || 3000;

app.set('port', PORT);

export default app;
