const caesarCipher = require('../scripts/caesarCipher');

test("Caesar Cipher Default test 1", () => {
    expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
});

test("Caesar Cipher Default test 2", () => {
    expect(caesarCipher('hello world', 2)).toBe('jgnnq yqtnf');
});

test("Caesar Cipher Default test 3", () => {
    expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
});

test("Offset: 0", () => {
    expect(caesarCipher('hello world', 0)).toBe('hello world');
});

test("Punctuation", () => {
    expect(caesarCipher('hello world...', 11)).toBe('spwwz hzcwo...');
});

test("Z letter", () => {
    expect(caesarCipher('z', 5)).toBe('e');
});

