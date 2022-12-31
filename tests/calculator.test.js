const Calculator = require('../scripts/calculator');

test("Sum Default Test 1", () => {
    expect(new Calculator().add(1, 2)).toBe(3);
});

test("Sum Default Test 2", () => {
    expect(new Calculator().add(5000, 100000)).toBe(105000);
});

test("Sum with negative numbers", () => {
    expect(new Calculator().add(-1, -2)).toBe(-3);
});

test("Sum with floats", () => {
    expect(new Calculator().add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Subtract Default Test 1", () => {
    expect(new Calculator().subtract(3, 2)).toBe(1);
});

test("Subtract Default Test 2", () => {
    expect(new Calculator().subtract(10000, 2000)).toBe(8000);
});

test("Subtract with negative result", () => {
    expect(new Calculator().subtract(1, 2)).toBe(-1);
});

test("Subtract with negative numbers", () => {
    expect(new Calculator().subtract(-1, -2)).toBe(1);
});

test("Subtract with floats", () => {
    expect(new Calculator().subtract(0.2, 0.1)).toBeCloseTo(0.1);
});

test("Divide Default Test 1", () => {
    expect(new Calculator().divide(2, 1)).toBe(2);
});

test("Divide Default Test 2", () => {
    expect(new Calculator().divide(100, 10)).toBe(10);
});

test("Divide with float result", () => {
    expect(new Calculator().divide(1, 2)).toBeCloseTo(0.5);
});

test("Divide with negative numbers", () => {
    expect(new Calculator().divide(-2, 2)).toBe(-1);
});

test("Divide with floats", () => {
    expect(new Calculator().divide(2, 0.1)).toBeCloseTo(20);
});

test("Divide with divisor 0", () => {
    expect(new Calculator().divide(5, 0)).toBeUndefined();
});

test("Multiply Default Test 1", () => {
    expect(new Calculator().multiply(1, 2)).toBe(2);
});

test("Multiply Default Test 2", () => {
    expect(new Calculator().multiply(10, 100)).toBe(1000);
});

test("Multiply with negative numbers", () => {
    expect(new Calculator().multiply(-1, 2)).toBe(-2);
});

test("Multiply with floats", () => {
    expect(new Calculator().multiply(0.1, 0.2)).toBeCloseTo(0.02);
});