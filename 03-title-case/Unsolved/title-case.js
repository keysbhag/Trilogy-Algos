// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

let titleCase = function(str) {
    let newString = ""
    let spaceCount = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt(0) === 32){
            spaceCount++
        }
    }
    let arr = str.split(" ", spaceCount)
    for (let j = 0; j < arr.length; j++){
        if (j === arr.length - 1) {
            newString = newString.concat(capitalizeFirstLetter(arr[j]));
        } else {
            newString = newString.concat(capitalizeFirstLetter(arr[j])+" ")
        }
    }

    console.log(newString);
    return newString;
};

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
