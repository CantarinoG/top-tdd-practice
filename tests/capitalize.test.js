const capitalize = require('../scripts/capitalize');

test("Capitalize Test 1", () => {
    expect(capitalize("the")).toBe("The");
});

test("Capitalize Test 2", () => {
    expect(capitalize("odin")).toBe("Odin");
});


test("Capitalize Test 3", () => {
    expect(capitalize("project")).toBe("Project");
});

test("Initial char is not letter", () => {
    expect(capitalize("123asd")).toBe("123asd");
});

test("Already capitalized", () => {
    expect(capitalize("Front-end")).toBe("Front-end");
});

test("More than one word", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});