import { Request, Response } from 'express';

export default function dotPageView(req: Request, res: Response) {
  res.render('dot.pug');
}
