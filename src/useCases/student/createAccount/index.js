import userDb from '../../../dataAccess/user';
import { createUser } from '../../../entities/user';
import { DatabaseError } from '../../../utils/customError';
import buildCreateAccount from './createAccount';
import buildCreateAccountController from './createAccountController';

export const createAccount = buildCreateAccount({
  userDb,
  createUser,
  DatabaseError,
});

export const createAccountController = buildCreateAccountController({
  createAccount,
});
