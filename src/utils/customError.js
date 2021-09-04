// eslint-disable-next-line import/prefer-default-export
export class EntityError extends Error {
  constructor({ message, code, attr, entity, statusCode = 400 }) {
    super(message);
    this.code = code;
    this.attr = attr;
    this.entity = entity;
    this.statusCode = statusCode;
    this.name = 'EntityError';
  }
}
