const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

const deepClone = (copyTarget) => JSON.parse(JSON.stringify(original));

const originalCopy = deepClone(original);

originalCopy.address.city = "Moscow";
originalCopy.name = "Ilia";
originalCopy.address.country = "Russia";

console.log(original, "/////", originalCopy);
