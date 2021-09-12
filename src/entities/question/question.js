export default function buildQuestion({ CustomError }) {
  function createQuestion({ html, delta }) {
    if (!html)
      throw new CustomError({
        message: 'Question must have a html.',
        code: 'undefined',
        attr: 'html',
        entity: 'question',
      });

    if (!delta)
      throw new CustomError({
        message: 'Question must have a delta.',
        code: 'undefined',
        attr: 'delta',
        entity: 'question',
      });

    return Object.freeze({
      getHtml: () => html,
      getDelta: () => delta,
      spread: () => ({ html, delta }),
    });
  }

  function updateQuestion({ html, delta }) {
    if (html !== undefined && !html)
      throw new CustomError({
        message: 'Question must have a valid html.',
        code: 'invalid',
        attr: 'html',
        entity: 'question',
      });

    if (delta !== undefined && !delta)
      throw new CustomError({
        message: 'Question must have a valid delta.',
        code: 'invalid',
        attr: 'delta',
        entity: 'question',
      });

    return Object.freeze({
      getHtml: () => html,
      getDelta: () => delta,
      spread: () => ({ html, delta }),
    });
  }

  return { createQuestion, updateQuestion };
}
