import userDb from '../../../dataAccess/user';
import { createUser } from '../../../entities/user';
import buildCreateAccount from './createAccount';
import { DatabaseError } from '../../../utils/customError';

export const createAccount = buildCreateAccount({
  userDb,
  createUser,
  DatabaseError,
});
