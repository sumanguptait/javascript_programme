// Sort Words in Alphabetical Order
const string = "The quick brown fox";
// uppercase characters are sorted before lowercase characters
const words = string.toLowerCase().split(" ");
words.sort();
console.log(words.join(" "));
