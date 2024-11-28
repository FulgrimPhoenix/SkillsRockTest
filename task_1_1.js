const isPalindrome = (str) =>
  str
    .match(/[a-zА-Я]/gi)
    .reverse()
    .join("")
    .toLowerCase() ===
  str
    .match(/[a-zА-Я]/gi)
    .join("")
    .toLowerCase();

console.log(isPalindrome("test"));
console.log(isPalindrome("tet"));
console.log(isPalindrome("Привет"));
console.log(isPalindrome("А роза упала на лапу Азора"));
