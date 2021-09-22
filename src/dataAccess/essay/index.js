import buildEssayDb from './essayDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const essayDb = buildEssayDb({ db, DatabaseError });

export default essayDb;
