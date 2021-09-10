import createFakeMock from '../../../__tests__/fixtures/fakeMock';
import truncate from '../../../__tests__/utils/truncate';
import mockDb from './index';
import { createMock, updateMock } from '../../entities/mock';

describe('Mock db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create mock', async () => {
    const mock = createMock(createFakeMock());

    const createdMock = await mockDb.create(mock.spread());

    expect(createdMock.id).toEqual(expect.any(Number));
  });

  it('Should update mock by id', async () => {
    const mock = createMock(createFakeMock());

    const createdMock = await mockDb.create(mock.spread());

    const updates = updateMock(createFakeMock());

    const [numberOfUpdatedMocks] = await mockDb.updateById({
      id: createdMock.id,
      ...updates.spread(),
    });

    expect(numberOfUpdatedMocks).toBe(1);
  });

  it('Should find mock by id', async () => {
    const mock = createMock(createFakeMock());

    const createdMock = await mockDb.create(mock.spread());

    const foundMock = await mockDb.findById({ id: createdMock.id });

    expect(foundMock.name).toBe(createdMock.name);
  });

  it('Should find mock by name', async () => {
    const mock = createMock(createFakeMock());

    const createdMock = await mockDb.create(mock.spread());

    const foundMock = await mockDb.findById({ id: createdMock.id });

    expect(foundMock.name).toBe(createdMock.name);
  });

  it('Should delete mock by id', async () => {
    const mock = createMock(createFakeMock());

    const createdMock = await mockDb.create(mock.spread());

    const numberOfDeletedMocks = await mockDb.deleteById({
      id: createdMock.id,
    });

    expect(numberOfDeletedMocks).toBe(1);
  });
});
