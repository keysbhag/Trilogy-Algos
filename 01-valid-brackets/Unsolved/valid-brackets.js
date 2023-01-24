// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] == "{") {
      if (str[i + 2] == "}") {
        return true;
      }
    }
    if (str[i] == "[") {
      if (str[i + 2] == "]") {
        return true;
      }
    }
    if (str[i] == "(") {
      if (str[i + 2] == ")") {
        return true;
      }
    }
  }

  return false
};

