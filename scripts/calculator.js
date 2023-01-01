class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (!b) return undefined;
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
