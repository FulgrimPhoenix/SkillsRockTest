function chunkArray(array, size) {
  if (Array.isArray(array) && Number.isInteger(size)) {
    const result = [];
  while (array.length > 0) {
    result.push(array.splice(0, size))
  }
  return result
  } else {
    return "Первый аргумент должен быть массивом, а второй числом"
  }
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 4));
