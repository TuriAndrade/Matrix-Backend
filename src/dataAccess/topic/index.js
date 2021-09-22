import buildTopicDb from './topicDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const topicDb = buildTopicDb({ db, DatabaseError });

export default topicDb;
