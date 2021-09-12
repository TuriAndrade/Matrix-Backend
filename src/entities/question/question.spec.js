import createFakeQuestion from '../../../__tests__/fixtures/fakeQuestion';
import { createQuestion, updateQuestion } from './index';

describe('Question entity', () => {
  it('Should create question', () => {
    const question = createQuestion(createFakeQuestion());

    expect(question).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update question', () => {
    const updatedQuestion = updateQuestion(createFakeQuestion());

    expect(updatedQuestion).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some question attributes', () => {
    const updatedHtml = updateQuestion({ html: '<p> new paragraph <p>' });

    expect(updatedHtml).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedDelta = updateQuestion({
      delta: {
        ops: [{ insert: 'new_delta', attributes: { bold: true } }],
      },
    });

    expect(updatedDelta).toEqual(
      expect.objectContaining({
        getHtml: expect.any(Function),
        getDelta: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefHtml = createFakeQuestion({ html: undefined });

    expect(() => createQuestion(undefHtml)).toThrow(
      'Question must have a html.'
    );

    const undefDelta = createFakeQuestion({ delta: undefined });

    expect(() => createQuestion(undefDelta)).toThrow(
      'Question must have a delta.'
    );
  });

  it('Should throw errors on update', () => {
    const nullHtml = createFakeQuestion({ html: null });

    expect(() => updateQuestion(nullHtml)).toThrow(
      'Question must have a valid html.'
    );
  });
});
