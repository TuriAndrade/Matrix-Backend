import buildAlternativeDb from './alternativeDb';
import db from '../../database/models';

const alternativeDb = buildAlternativeDb({ db });

export default alternativeDb;
