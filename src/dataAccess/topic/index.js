import buildTopicDb from './topicDb';
import db from '../../database/models';

const topicDb = buildTopicDb({ db });

export default topicDb;
