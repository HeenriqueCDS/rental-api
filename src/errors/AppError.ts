export class AppError {
  readonly code: string;
  readonly message: string;
  readonly statusCode: number;

  constructor(code: string, message: string, statusCode = 400) {
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
  }
}
