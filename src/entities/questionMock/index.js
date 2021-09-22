import buildQuestionMock from './questionMock';
import { EntityError } from '../../utils/customError';

export const { createQuestionMock, updateQuestionMock } = buildQuestionMock({
  EntityError,
});
