import buildUserMock from './userMock';
import { EntityError } from '../../utils/customError';

export const { createUserMock, updateUserMock } = buildUserMock({
  EntityError,
});
