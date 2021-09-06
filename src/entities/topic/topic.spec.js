import createFakeTopic from '../../../__tests__/fixtures/fakeTopic';
import { createTopic, updateTopic } from './index';

describe('Topic entity', () => {
  it('Should create topic', () => {
    const topic = createTopic(createFakeTopic());

    expect(topic).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getName: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update topic', () => {
    const updatedTopic = updateTopic(createFakeTopic());

    expect(updatedTopic).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getName: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some topic attributes', () => {
    const updatedName = updateTopic({ name: 'new_name_for_topic' });

    expect(updatedName).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getName: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedLink = updateTopic({
      link: 'new_link',
    });

    expect(updatedLink).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getName: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefName = createFakeTopic({ name: undefined });

    expect(() => createTopic(undefName)).toThrow('Topic must have a name.');

    const undefLink = createFakeTopic({ link: undefined });

    expect(() => createTopic(undefLink)).toThrow('Topic must have a link.');

    const invalidName = createFakeTopic({ name: 'short' });

    expect(() => createTopic(invalidName)).toThrow(
      'Topic must have a name with at least 8 characters.'
    );
  });

  it('Should throw errors on update', () => {
    const nullName = createFakeTopic({ name: null });

    expect(() => updateTopic(nullName)).toThrow(
      'Topic must have a valid name.'
    );

    const nullLink = createFakeTopic({ link: null });

    expect(() => updateTopic(nullLink)).toThrow(
      'Topic must have a valid link.'
    );
  });
});
