export default class Exception extends Error {
  constructor(message, statusCode = 400, data) {
    super(message);
    this.isApiException = true;
    this.name = "Exception";
    this.statusCode = Math.max(400, Math.min(499, statusCode));
    this.data = data;
  }
}
