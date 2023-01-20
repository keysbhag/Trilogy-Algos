// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
  let charMap = {};

  for (let i = 0; i < sub.length; i++){
    let char = sub[i];

    if (char in charMap){
      charMap[char]++
    } else{
      charMap[char] = 1;
    }
  }

  for (let j = 0; j < str.length; j++){
    let char = str[j];

    if (char in charMap){
      charMap[char] -= 1
    }
  }

  for (let key in charMap){
    if (charMap[key] > 0){
      return false
    }
  }

  return true
};

permutationSubstring("superce", "super");
