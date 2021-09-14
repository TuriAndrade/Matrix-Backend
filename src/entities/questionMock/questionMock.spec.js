import createFakeQuestionMock from '../../../__tests__/fixtures/fakeQuestionMock';
import { createQuestionMock, updateQuestionMock } from './index';

describe('Question mock entity', () => {
  it('Should create question mock', () => {
    const questionMock = createQuestionMock(createFakeQuestionMock());

    expect(questionMock).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update question mock', () => {
    const updatedQuestionMock = updateQuestionMock(createFakeQuestionMock());

    expect(updatedQuestionMock).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some question mock attributes', () => {
    const updatedQuestionId = updateQuestionMock({
      questionId: Math.floor(Math.random() * 1000),
    });

    expect(updatedQuestionId).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedMockId = updateQuestionMock({
      mockId: Math.floor(Math.random() * 1000),
    });

    expect(updatedMockId).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefQuestionId = createFakeQuestionMock({ questionId: undefined });

    expect(() => createQuestionMock(undefQuestionId)).toThrow(
      'Question mock must have a question id.'
    );

    const undefMockId = createFakeQuestionMock({ mockId: undefined });

    expect(() => createQuestionMock(undefMockId)).toThrow(
      'Question mock must have a mock id.'
    );

    const invalidQuestionId = createFakeQuestionMock({
      questionId: 'not_number',
    });

    expect(() => createQuestionMock(invalidQuestionId)).toThrow(
      'Question mock must have a question id that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullQuestionId = createFakeQuestionMock({ questionId: null });

    expect(() => updateQuestionMock(nullQuestionId)).toThrow(
      'Question mock must have a valid question id.'
    );

    const nullMockId = createFakeQuestionMock({ mockId: null });

    expect(() => updateQuestionMock(nullMockId)).toThrow(
      'Question mock must have a valid mock id.'
    );
  });
});
