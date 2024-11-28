class Calculator {
  constructor() {}

  add(a, b) {
    return Number(a) + Number(b)
  }
  subtract(a, b) {
    return Number(a) - Number(b)
  }
  multiply(a, b) {
    return Number(a) * Number(b)
  }
  divide(a, b) {
    if (Number(b) !== 0) {
      return Number(a) / Number(b)

    }
  return "на ноль делить нельзя"
  }
}

export const calculator = new Calculator();

console.log(calculator.add(4, 9));
console.log(calculator.subtract(119, 9));
console.log(calculator.multiply(444, 999));
console.log(calculator.divide(4, 0));
