import buildTopic from './topic';
import { EntityError } from '../../utils/customError';

export const { createTopic, updateTopic } = buildTopic({
  CustomError: EntityError,
});
