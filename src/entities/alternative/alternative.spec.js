import createFakeAlternative from '../../../__tests__/fixtures/fakeAlternative';
import { createAlternative, updateAlternative } from './index';

describe('Alternative entity', () => {
  it('Should create alternative', () => {
    const alternative = createAlternative(createFakeAlternative());

    expect(alternative).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        isCorrect: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update alternative', () => {
    const updatedAlternative = updateAlternative(createFakeAlternative());

    expect(updatedAlternative).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        isCorrect: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some alternative attributes', () => {
    const updatedHtml = updateAlternative({ html: '<p> new paragraph <p>' });

    expect(updatedHtml).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        isCorrect: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedDelta = updateAlternative({
      delta: {
        ops: [{ insert: 'new_delta', attributes: { bold: true } }],
      },
    });

    expect(updatedDelta).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        isCorrect: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefHtml = createFakeAlternative({ html: undefined });

    expect(() => createAlternative(undefHtml)).toThrow(
      'Alternative must have a html.'
    );

    const undefDelta = createFakeAlternative({ delta: undefined });

    expect(() => createAlternative(undefDelta)).toThrow(
      'Alternative must have a delta.'
    );

    const invalidQuestionId = createFakeAlternative({
      questionId: 'not_number',
    });

    expect(() => createAlternative(invalidQuestionId)).toThrow(
      'Alternative must have a question id that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullHtml = createFakeAlternative({ html: null });

    expect(() => updateAlternative(nullHtml)).toThrow(
      'Alternative must have a valid html.'
    );
  });
});
