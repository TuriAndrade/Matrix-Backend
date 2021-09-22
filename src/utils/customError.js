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

export class DatabaseError extends Error {
  constructor({ message, code, attr, model, statusCode = 500 }) {
    super(message);
    this.code = code;
    this.attr = attr;
    this.model = model;
    this.statusCode = statusCode;
    this.name = 'DatabaseError';
  }
}
