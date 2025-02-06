// Create a function that will capitalize the first letter of each word in a text

const capitalizedWords = (text) => {
  return text
    .split(" ") // Split the text into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
};
const text = "this is a sample text to capitalize.";
const capitalizeText = capitalizedWords(text);
console.log(capitalizeText);
