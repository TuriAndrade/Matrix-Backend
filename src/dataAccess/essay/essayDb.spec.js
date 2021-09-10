import createFakeEssay from '../../../__tests__/fixtures/fakeEssay';
import truncate from '../../../__tests__/utils/truncate';
import { insertUser, insertTopic } from '../../../__tests__/utils/seed';
import essayDb from './index';
import { createEssay, updateEssay } from '../../entities/essay';

describe('Essay db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create essay', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essay = createEssay(
      createFakeEssay({ userId: user.id, topicId: topic.id })
    );

    const createdEssay = await essayDb.create(essay.spread());

    expect(createdEssay.id).toEqual(expect.any(Number));
  });

  it('Should update essay by id', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essay = createEssay(
      createFakeEssay({ userId: user.id, topicId: topic.id })
    );

    const createdEssay = await essayDb.create(essay.spread());

    const update = updateEssay(
      createFakeEssay({ userId: user.id, topicId: topic.id })
    );

    const [numberOfUpdatedEssays] = await essayDb.updateById({
      id: createdEssay.id,
      ...update.spread(),
    });

    expect(numberOfUpdatedEssays).toBe(1);
  });

  it('Should find essays by user id', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essays = [];

    for (let i = 0; i < 10; i++) {
      essays.push(
        createEssay(createFakeEssay({ userId: user.id, topicId: topic.id }))
      );
    }

    const essayIds = [];

    await Promise.all(
      essays.map((essay) => essayDb.create(essay.spread()))
    ).then((result) => result.forEach((entry) => essayIds.push(entry.id)));

    const foundEssays = await essayDb.findByUserId({
      userId: user.id,
    });

    expect(foundEssays.length).toBe(10);

    foundEssays.forEach((essay) => {
      expect(essayIds).toContain(essay.id);
    });
  });

  it('Should find essays by topic id', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essays = [];

    for (let i = 0; i < 10; i++) {
      essays.push(
        createEssay(createFakeEssay({ userId: user.id, topicId: topic.id }))
      );
    }

    const essayIds = [];

    await Promise.all(
      essays.map((essay) => essayDb.create(essay.spread()))
    ).then((result) => result.forEach((entry) => essayIds.push(entry.id)));

    const foundEssays = await essayDb.findByTopicId({
      topicId: topic.id,
    });

    expect(foundEssays.length).toBe(10);

    foundEssays.forEach((essay) => {
      expect(essayIds).toContain(essay.id);
    });
  });

  it('Should find essays by user and topic ids', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essays = [];

    for (let i = 0; i < 10; i++) {
      essays.push(
        createEssay(createFakeEssay({ userId: user.id, topicId: topic.id }))
      );
    }

    const essayIds = [];

    await Promise.all(
      essays.map((essay) => essayDb.create(essay.spread()))
    ).then((result) => result.forEach((entry) => essayIds.push(entry.id)));

    const foundEssays = await essayDb.findByUserAndTopicIds({
      userId: user.id,
      topicId: topic.id,
    });

    expect(foundEssays.length).toBe(10);

    foundEssays.forEach((essay) => {
      expect(essayIds).toContain(essay.id);
    });
  });

  it('Should delete essay by id', async () => {
    const user = await insertUser();
    const topic = await insertTopic();

    const essay = createEssay(
      createFakeEssay({ userId: user.id, topicId: topic.id })
    );

    const createdEssay = await essayDb.create(essay.spread());

    const numberOfDeletedEssays = await essayDb.deleteById({
      id: createdEssay.id,
    });

    expect(numberOfDeletedEssays).toBe(1);
  });
});
