import { Router } from 'express';
import {
  renderCreate,
  renderHome,
  renderLogin,
  renderSearch,
  renderSignup,
} from './../controllers/viewControllers';

const viewRouter = Router();
viewRouter.route('/').get(renderHome).post(renderCreate);
viewRouter.route('/user').post(renderSearch);
viewRouter.route('/login').get(renderLogin);
viewRouter.route('/signup').get(renderSignup);

export default viewRouter;
