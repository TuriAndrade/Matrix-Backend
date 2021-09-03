import { Router } from 'express';

const routes = Router();

routes.get('/admins', (req, res) => {
  res.send('ADMIN');
});

export default routes;
