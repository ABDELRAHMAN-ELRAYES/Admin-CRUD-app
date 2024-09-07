import { Router } from 'express';
import {renderHome, renderLogin } from './../controllers/viewControllers';

const viewRouter = Router();
viewRouter.route('/').get(renderHome);
viewRouter.route('/login').get(renderLogin);

export default viewRouter;
