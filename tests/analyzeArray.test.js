const analyzeArray = require('../scripts/analyzeArray');

test('Analyze Array Default test 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze Array Default test 2', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('Negative numbers', () => {
  expect(analyzeArray([1, 2, 3, 4, -5])).toEqual({
    average: 1,
    min: -5,
    max: 4,
    length: 5,
  });
});

test('Floats', () => {
  expect(analyzeArray([0.1, 0.2, 0.3, 0.4, 0.5])).toEqual({
    average: 0.3,
    min: 0.1,
    max: 0.5,
    length: 5,
  });
});
