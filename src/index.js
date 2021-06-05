import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoutes, adminRoutes } from './routes';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.use(userRoutes);
app.use(adminRoutes);

app.listen(process.env.APP_PORT, process.env.APP_HOST);
