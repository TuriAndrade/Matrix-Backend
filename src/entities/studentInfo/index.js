import buildStudentInfo from './studentInfo';
import { EntityError } from '../../utils/customError';

export const { createStudentInfo, updateStudentInfo } = buildStudentInfo({
  CustomError: EntityError,
});
