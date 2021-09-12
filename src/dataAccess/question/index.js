import buildQuestionDb from './questionDb';
import db from '../../database/models';

const questionDb = buildQuestionDb({ db });

export default questionDb;
