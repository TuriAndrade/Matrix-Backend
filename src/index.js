import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routeModules from './routes';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

app.set('trust proxy', true);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

routeModules.forEach((module) => app.use(module));

app.listen(process.env.APP_PORT, process.env.APP_HOST);
