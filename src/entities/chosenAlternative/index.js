import buildChosenAlternative from './chosenAlternative';
import { EntityError } from '../../utils/customError';

export const { createChosenAlternative, updateChosenAlternative } =
  buildChosenAlternative({
    EntityError,
  });
