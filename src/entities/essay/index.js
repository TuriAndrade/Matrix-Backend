import buildEssay from './essay';
import { EntityError } from '../../utils/customError';

export const { createEssay, updateEssay } = buildEssay({
  EntityError,
});
