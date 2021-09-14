import buildQuestionMockDb from './questionMockDb';
import db from '../../database/models';

const questionMockDb = buildQuestionMockDb({ db });

export default questionMockDb;
