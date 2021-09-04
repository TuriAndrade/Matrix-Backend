export default function buildTopic({ CustomError }) {
  function checkName(name) {
    if (name.length < 8)
      throw new CustomError({
        message: 'Topic must have a name with at least 8 characters.',
        code: 'small',
        attr: 'name',
        entity: 'topic',
      });

    if (name.length > 100)
      throw new CustomError({
        message: 'Topic must have a name with at most 100 characters.',
        code: 'big',
        attr: 'name',
        entity: 'topic',
      });
  }

  function createTopic({ link, name }) {
    if (!link)
      throw new CustomError({
        message: 'Topic must have a link.',
        code: 'undefined',
        attr: 'link',
        entity: 'topic',
      });
    if (!name)
      throw new CustomError({
        message: 'Topic must have a name.',
        code: 'undefined',
        attr: 'name',
        entity: 'topic',
      });

    checkName(name);

    return Object.freeze({
      getLink: () => link,
      getName: () => name,
      spread: () => ({
        link,
        name,
      }),
    });
  }

  function updateTopic({ link, name }) {
    if (link !== undefined && !link)
      throw new CustomError({
        message: 'Topic must have a valid link.',
        code: 'invalid',
        attr: 'link',
        entity: 'topic',
      });

    if (name !== undefined) {
      if (!name)
        throw new CustomError({
          message: 'Topic must have a valid name.',
          code: 'invalid',
          attr: 'name',
          entity: 'topic',
        });
      else checkName(name);
    }

    return Object.freeze({
      getLink: () => link,
      getName: () => name,
      spread: () => ({
        link,
        name,
      }),
    });
  }

  return { createTopic, updateTopic };
}
