import { Router } from 'express';
import exemploRouter from './exemploRouter.js';

export default (app) => {
  const router = Router();
  exemploRouter(router);
  app.use('/api', router);
};
