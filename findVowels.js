const findVowels = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(findVowels("hello"));
