export class ErrorHandler extends Error {
  code: number;

  constructor(message: string = 'Internal Server Error.', errorCode: number = 500) {
    super(message);
    this.code = errorCode;
  }
}
