class Calculator {
  constructor() {}

  add(a, b) {
    return a + b
  }
  subtract(a, b) {
    return a - b
  }
  multiply(a, b) {
    return a * b
  }
  divide(a, b) {
    if (b === 0) {
      return "на ноль делить нельзя"
    }
    return a / b
  }
}

const calculator = new Calculator();

console.log(calculator.add(4, 9));
console.log(calculator.subtract(119, 9));
console.log(calculator.multiply(444, 999));
console.log(calculator.divide(4, 0));
