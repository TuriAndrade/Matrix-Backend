import { Router } from 'express';

const routes = Router();

routes.get('/users', (req, res) => {
  res.send('USER');
});

export default routes;
