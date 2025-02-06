// Create a function that converts a string to an array of characters
const stringToCharArray = (text) => {
  // return text.split("");
  return Array.from(text);
};

const text = "Hello, World!";
const charArray = stringToCharArray(text);
console.log(charArray);

// Both split("") and Array.from() achieve the same result for strings.
// Array.from() is more general-purpose, while split("") is specific to strings.
