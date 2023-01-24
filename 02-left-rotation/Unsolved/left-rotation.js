// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {

    for(let i = 0; i < positions; i++){
        const first = arr.shift()

        arr.push(first);
    }
};
