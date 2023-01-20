// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    let myArray = magazine.toLowerCase().split(" ");
    let mySubArray = flyer.toLowerCase().split(" ");
    let flyerLength = mySubArray.length;
    let flyerCount = 0;

    for (let i = 0; i < myArray.length; i++){
        for (let j = 0; j < mySubArray.length; j++){
            if (mySubArray[j] === myArray[i]){
                flyerCount++
            }
        }
    }

    if(flyerLength === flyerCount){
        return true;
    } else {
        return false;
    }



};

concertFlyer("Yo whats going on mamu", "Yolo");