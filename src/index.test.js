const { capitalise, reverseString, calculator } = require("./js/index");

test("Capitalise test", () => {
  expect(capitalise("jonathan")).toBe("Jonathan");
});

test("Reverse test", () => {
  expect(reverseString("Jonathan")).toBe("nahtanoJ");
});

test("Calculator add test", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator subtract test", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("Calculator divide test", () => {
  expect(calculator.divide(12, 4)).toBe(3);
});
test("Calculator multiply test", () => {
    expect(calculator.multiply(12, 4)).toBe(48);
  });
  