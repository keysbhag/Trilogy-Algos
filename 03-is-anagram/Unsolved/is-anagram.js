// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    let strACount = 0;
    let strBCount = 0;
    for (let i = 0; i < strA.length; i++){
        strACount = strACount + strA.charCodeAt(i);
    }

    for (let j = 0; j < strB.length; j++) {
        strBCount = strBCount + strB.charCodeAt(j);
    }

    if (strACount === strBCount){
        return true
    } else{
        return false
    }
};

isAnagram("aaa")