export default function buildQuestionMock({ EntityError }) {
  function checkQuestionId(questionId) {
    if (typeof questionId !== 'number')
      throw new EntityError({
        message: 'Question mock must have a question id that is a number.',
        code: 'invalid',
        attr: 'questionId',
        entity: 'questionMock',
      });
  }

  function checkMockId(mockId) {
    if (typeof mockId !== 'number')
      throw new EntityError({
        message: 'Question mock must have a mock id that is a number.',
        code: 'invalid',
        attr: 'mockId',
        entity: 'questionMock',
      });
  }

  function createQuestionMock({ questionId, mockId }) {
    if (!questionId && questionId !== 0)
      throw new EntityError({
        message: 'Question mock must have a question id.',
        code: 'undefined',
        attr: 'questionId',
        entity: 'questionMock',
      });

    if (!mockId && mockId !== 0)
      throw new EntityError({
        message: 'Question mock must have a mock id.',
        code: 'undefined',
        attr: 'mockId',
        entity: 'questionMock',
      });

    checkQuestionId(questionId);
    checkMockId(mockId);

    return Object.freeze({
      getQuestionId: () => questionId,
      getMockId: () => mockId,
      spread: () => ({ questionId, mockId }),
    });
  }

  function updateQuestionMock({ questionId, mockId }) {
    if (questionId !== undefined && questionId !== 0) {
      if (!questionId)
        throw new EntityError({
          message: 'Question mock must have a valid question id.',
          code: 'invalid',
          attr: 'questionId',
          entity: 'questionMock',
        });
      else checkQuestionId(questionId);
    }

    if (mockId !== undefined && mockId !== 0) {
      if (!mockId)
        throw new EntityError({
          message: 'Question mock must have a valid mock id.',
          code: 'invalid',
          attr: 'mockId',
          entity: 'questionMock',
        });
      else checkMockId(mockId);
    }

    return Object.freeze({
      getQuestionId: () => questionId,
      getMockId: () => mockId,
      spread: () => ({ questionId, mockId }),
    });
  }

  return { createQuestionMock, updateQuestionMock };
}
