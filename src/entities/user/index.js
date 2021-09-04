import buildUser from './user';
import {
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
} from '../../utils/regex';
import { EntityError } from '../../utils/customError';

export const { createUser, updateUser } = buildUser({
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
  CustomError: EntityError,
});
