import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync';
import User from '../models/userModel';

export const renderHome = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('home', {
      title: 'home',
    });
  }
);

export const renderLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('login', {
      title: 'login',
    });
  }
);

export const renderSignup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('signup', {
      title: 'signup',
    });
  }
);
export const renderSearch = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body.search);
    const user = await User.findOne({ email: req.body.search });
    const users = await User.find({ role: { $ne: 'admin' } });
    res.status(200).render('search', {
      title: 'admin | dashboard',
      user,
      users,
    });
  }
);
export const renderCreate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.confirmPassword,
    });
    const users = await User.find({ role: { $ne: 'admin' } });
    res.status(200).render('admin', {
      title: 'admin | dashboard',
      users,
    });
  }
);
