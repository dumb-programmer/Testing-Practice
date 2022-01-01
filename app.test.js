const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesarCypher = require("./caesarCipher");
const analyzeArray = require("./analyzeArray");

test("Checking the capitalize function", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("Checking the reverseString function", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Checking the calculator", () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.sub(2, 4)).toBe(-2);
  expect(calculator.mul(2, 4)).toBe(8);
  expect(calculator.div(2, 4)).toBeCloseTo(0.5);
});

test("Checking CaesarCipher", () => {
  expect(caesarCypher.encrypt("Hello World", 13)).toBe("uryyb jbeyq");
  expect(caesarCypher.decrypt("uryyb jbeyq", 13)).toBe("hello world");
});

test("Checking analyzeArray", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
