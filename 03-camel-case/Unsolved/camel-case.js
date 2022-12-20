// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let newString = "";
    let spaceCount = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) === 32) {
        spaceCount++;
        }
    }
    let arr = str.split(" ", spaceCount);
    for (let j = 0; j < arr.length; j++) {
        if (j === 0) {
        newString = newString.concat(arr[j].toLowerCase());
        } else {
        newString = newString.concat(capitalizeFirstLetter(arr[j]));
        }
    }

    console.log(newString);
    return newString;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


