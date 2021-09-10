import buildMockDb from './mockDb';
import db from '../../database/models';

const mockDb = buildMockDb({ db });

export default mockDb;
