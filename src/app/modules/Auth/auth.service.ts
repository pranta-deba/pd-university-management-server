import status from 'http-status';
import { TLoginUser } from './auth.interface';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const isUserExists = await User.findOne({ id: payload.id });

  if (!isUserExists) {
    throw new AppError(status.NOT_FOUND, 'This user is not found !');
  }

  return {};
};

const changePassword = async () => {};

const refreshToken = async () => {};

export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
};
