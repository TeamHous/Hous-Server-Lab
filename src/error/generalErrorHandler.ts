import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import util from '../modules/util';
import { ErrorWithStatusCode } from './errorGenerator';

const generalErrorHandler: ErrorRequestHandler = (err: ErrorWithStatusCode, req: Request, res: Response, next: NextFunction) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).send(util.fail(statusCode || 500, message));
};

export default generalErrorHandler;
