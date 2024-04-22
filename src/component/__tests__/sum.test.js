import Sum from "../Sum";

test("sum function should be calculate the sum of two numbers",() => {
const result = Sum(5,4);
//Assertion
expect (result).toBe(9);
});