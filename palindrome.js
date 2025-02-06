// Check if a string is a palindrome--a word, phrase, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
const isPalindrome = (str) => {
  let cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};
const text = "A man, a plan, a canal, Panama!";
// const text = "Hello, World!";
const isPal = isPalindrome(text);
console.log(isPal);
