import buildQuestion from './question';
import { EntityError } from '../../utils/customError';

export const { createQuestion, updateQuestion } = buildQuestion({
  CustomError: EntityError,
});
