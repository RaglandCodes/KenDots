import { Request, Response } from 'express';

export default function homeView(req: Request, res: Response) {
  res.render('home.pug');
}
