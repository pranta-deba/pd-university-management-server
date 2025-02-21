import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';

const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  jwt.sign(jwtPayload, config.jwt_refresh_secret as string, {
    expiresIn: '10d',
  });
};
