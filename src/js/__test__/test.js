import Validator from '../app';

test('имя содержит латинские буквы', () => {
  const validator = new Validator();
  expect(validator.validateUsername('User')).toBeTruthy();
});

test('имя содержит латинские буквы и цифры', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super100User')).toBeTruthy();
});

test('имя сожержит тире', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super-User')).toBeTruthy();
});

test('имя содержит подчеркивание _', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super_user')).toBeTruthy();
});

test('имя содержит другой знак, кроме тире и подчеркивания', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super!User')).toBeFalsy();
});

test('имя содержит пробел', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super User')).toBeFalsy();
});

test('имя содержит букву кириллицы', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super имя')).toBeFalsy();
});

test('имя содержит более трех цифр подряд', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Super1111User')).toBeFalsy();
});

test('имя начинается не на букву', () => {
  const validator = new Validator();
  expect(validator.validateUsername('_User')).toBeFalsy();
});

test('имя заканчивается не буквой', () => {
  const validator = new Validator();
  expect(validator.validateUsername('User1')).toBeFalsy();
});
