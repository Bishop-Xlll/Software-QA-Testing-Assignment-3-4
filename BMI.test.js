const BMI1 = require('./public/BMI1');

//BMI

test('calculates  bmi', () => {
  expect(BMI1(5, 6, 92)).toBe('Underweight');
});

test('calculates  bmi', () => {
  expect(BMI1(5, 0, 80)).toBe('Underweight');
});

test('calculates  bmi', () => {
  expect(BMI1(6, 3, 260)).toBe('Obese');
});

test('calculates  bmi', () => {
  expect(BMI1(4, 8, 125)).toBe('Overweight');
});

test('calculates  bmi', () => {
  expect(BMI1(5, 6, 130)).toBe('Healthy');
});


test('calculates  bmi', () => {
  expect(BMI1(4, 9, 100)).toBe('Healthy');
});