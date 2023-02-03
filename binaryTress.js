function findAddedChar(s, t) {
  // sort the strings
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  // iterate through the characters in both strings
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      // the characters are different, so return the character from t
      return t[i];
    }
  }
}

const s = "abcd";
const t = "ceadb";

console.log(findAddedChar(s, t));
