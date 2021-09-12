import buildAlternative from './alternative';
import { EntityError } from '../../utils/customError';

export const { createAlternative, updateAlternative } = buildAlternative({
  CustomError: EntityError,
});
