// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
        newArr.push(Math.pow(arr[i], 2))
    }

    return newArr.sort(function (a, b) {
      return a - b;
    });
};

sortedSquares([2,4,6,7,8])