export default class ApiError extends Error {
  /**
   * Customer API Error object
   * @param {string} code Error code
   * @param {string} message Error message
   */
  constructor(code = '', message = '') {
    super(message);
    this.code = code;
  }
}
