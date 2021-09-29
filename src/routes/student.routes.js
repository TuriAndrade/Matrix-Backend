import { Router } from 'express';
import createExpressCallback from '../utils/expressCallback';

// CONTROLLERS
import { createAccountController } from '../useCases/student/createAccount';

const routes = Router();

routes.post('/student', createExpressCallback(createAccountController));

export default routes;
