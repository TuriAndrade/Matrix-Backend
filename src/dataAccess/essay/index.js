import buildEssayDb from './essayDb';
import db from '../../database/models';

const essayDb = buildEssayDb({ db });

export default essayDb;
