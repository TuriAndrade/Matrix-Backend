import buildStudyHistoryDb from './studyHistoryDb';
import db from '../../database/models';

const studyHistoryDb = buildStudyHistoryDb({ db });

export default studyHistoryDb;
