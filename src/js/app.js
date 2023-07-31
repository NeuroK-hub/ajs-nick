export default class Validator {
  validateUsername(inputName) {
    this.inputName = inputName;
    return (/^[a-z]+[-\w]+[a-z]$/i.test(this.inputName)) && (!/\d{4}/.test(this.inputName));
  }
}
