import buildStudyHistory from './studyHistory';
import { EntityError } from '../../utils/customError';

export const { createStudyHistory, updateStudyHistory } = buildStudyHistory({
  CustomError: EntityError,
});
