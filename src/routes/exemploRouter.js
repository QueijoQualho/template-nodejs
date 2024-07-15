import { test, testService } from '../controller/exemploController.js';

export default (router) => {
  router.get('/test', test);
  router.get('/testService', testService);
};
