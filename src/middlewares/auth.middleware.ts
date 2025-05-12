import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // Aquí podrías validar token o sesión más adelante
  console.log('Authentication middleware passed');
  next();
};
