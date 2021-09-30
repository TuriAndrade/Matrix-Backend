import userDb from '../../../dataAccess/user';
import studentInfoDb from '../../../dataAccess/studentInfo';
import { createUser } from '../../../entities/user';
import { createStudentInfo } from '../../../entities/studentInfo';
import { DatabaseError } from '../../../utils/customError';
import buildCreateAccount from './createAccount';
import buildCreateAccountController from './createAccountController';

export const createAccount = buildCreateAccount({
  userDb,
  studentInfoDb,
  createUser,
  createStudentInfo,
  DatabaseError,
});

export const createAccountController = buildCreateAccountController({
  createAccount,
});
