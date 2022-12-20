// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    let largestNum = arr[0];
    
    for (let i = 0; i < arr.length; i++){
        if (largestNum < arr[i]) {
            largestNum = arr[i]
        }
    }
    let secLargestNum = arr[0];
    for (let j = 0; j < arr.length; j++){
        if (secLargestNum < arr[j] && arr[j] < largestNum){
            secLargestNum = arr[j]
        }
    }
    return largestNum * secLargestNum
};
