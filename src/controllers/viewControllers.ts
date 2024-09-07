import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync';



export const renderHome = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      res.status(200).render('home');
    }
  );
  
export const renderLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('home');
  }
);
