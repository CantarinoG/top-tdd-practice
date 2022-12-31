const capitalize = require('../scripts/reverseString');

test("Reverse String Default Test 1", () => {
    expect(capitalize("the")).toBe("eht");
});

test("Reverse String Default Test 2", () => {
    expect(capitalize("odin")).toBe("nido");
});


test("Reverse String Default Test 3", () => {
    expect(capitalize("project")).toBe("tcejorp");
});

test("String with spaces", () => {
    expect(capitalize("hello world")).toBe("dlrow olleh");
});

