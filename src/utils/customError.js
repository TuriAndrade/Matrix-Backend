export class EntityError extends Error {
  constructor({ message, code, attr, entity, statusCode = 400, originError }) {
    super(message);
    this.code = code;
    this.attr = attr;
    this.entity = entity;
    this.statusCode = statusCode;
    this.originError = originError;
    this.name = 'EntityError';
  }
}

export class DatabaseError extends Error {
  constructor({ message, code, attr, model, statusCode = 500, originError }) {
    super(message);
    this.code = code;
    this.attr = attr;
    this.model = model;
    this.statusCode = statusCode;
    this.originError = originError;
    this.name = 'DatabaseError';
  }
}
