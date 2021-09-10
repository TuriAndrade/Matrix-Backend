import createFakeTopic from '../../../__tests__/fixtures/fakeTopic';
import truncate from '../../../__tests__/utils/truncate';
import topicDb from './index';
import { createTopic, updateTopic } from '../../entities/topic';

describe('Topic db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create topic', async () => {
    const topic = createTopic(createFakeTopic());

    const createdTopic = await topicDb.create(topic.spread());

    expect(createdTopic.id).toEqual(expect.any(Number));
  });

  it('Should update topic by id', async () => {
    const topic = createTopic(createFakeTopic());

    const createdTopic = await topicDb.create(topic.spread());

    const updates = updateTopic(createFakeTopic());

    const [numberOfUpdatedTopics] = await topicDb.updateById({
      id: createdTopic.id,
      ...updates.spread(),
    });

    expect(numberOfUpdatedTopics).toBe(1);
  });

  it('Should find topic by id', async () => {
    const topic = createTopic(createFakeTopic());

    const createdTopic = await topicDb.create(topic.spread());

    const foundTopic = await topicDb.findById({ id: createdTopic.id });

    expect(foundTopic.link).toBe(createdTopic.link);
  });

  it('Should delete topic by id', async () => {
    const topic = createTopic(createFakeTopic());

    const createdTopic = await topicDb.create(topic.spread());

    const numberOfDeletedTopics = await topicDb.deleteById({
      id: createdTopic.id,
    });

    expect(numberOfDeletedTopics).toBe(1);
  });
});
