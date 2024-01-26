import express from 'express';
import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

export default app;
