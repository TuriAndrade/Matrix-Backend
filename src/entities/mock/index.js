import buildMock from './mock';
import { EntityError } from '../../utils/customError';

export const { createMock, updateMock } = buildMock({
  EntityError,
});
