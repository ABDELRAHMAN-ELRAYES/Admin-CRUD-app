import { Router } from 'express';
import {
  login,
  signup,
  protect,
  strictUser,
} from './../controllers/authController';
import { getAllUsers, renderHome } from '../controllers/userController';
const userRouter = Router();

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/').get(protect, strictUser('admin'), getAllUsers);
userRouter.route('/home').get(renderHome);
export default userRouter;
