// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    let newArray = [];

    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                newArray.push(arr1[i])
                arr1.splice(i, 1)
                arr2.splice(j, 1)
            }
        }
    }

    return newArray
};
