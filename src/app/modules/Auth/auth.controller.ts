import catchAsync from '../../utils/catchAsync';

const loginUser = catchAsync(async (req, res) => {});

const changePassword = catchAsync(async (req, res) => {});

const refreshToken = catchAsync(async (req, res) => {});

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
};
