// If two strings are anagrams of each other, it means they contain the same characters in the same frequency but in a different order
const areAnagram = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(areAnagram("listen", "silent")); // true
console.log(areAnagram("hello", "bye")); // false
