const result = (numsDiapos) =>
  [...Array(numsDiapos).keys()]
    .map((i) => i + 1)
    .reduce((acc, el) => {
      el % 15
        ? el % 3
          ? el % 5
            ? null
            : acc.push("Buzz")
          : acc.push("Fizz")
        : acc.push("FizzBuzz");

      !(el % 3) || !(el % 5) ? null : acc.push(el);
      return acc;
    }, [])
    .forEach((_) => console.log(_));

console.log(result(100));
