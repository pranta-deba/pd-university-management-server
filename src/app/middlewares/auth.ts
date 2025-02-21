import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import status from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
        }

        const role = (decoded as JwtPayload).role;

        // role verify
        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
        }

        // decoded
        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;
