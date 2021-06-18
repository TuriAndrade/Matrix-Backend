import buildUser from './user';
import {
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
} from '../../utils/regex';

export const { createUser, updateUser } = buildUser({
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
});
