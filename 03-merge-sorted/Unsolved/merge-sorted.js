// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let newSortArray = []

    while (leftArrayIndex !== arr1.length && rightArrayIndex !== arr2.length){
        if (arr1[leftArrayIndex] > arr2[rightArrayIndex]){
            newSortArray.push(arr2[rightArrayIndex]);
            rightArrayIndex++
        } else if (arr1[leftArrayIndex] < arr2[rightArrayIndex]) {
            newSortArray.push(arr1[leftArrayIndex]);
            leftArrayIndex++
        } else {
            newSortArray.push(arr2[rightArrayIndex]);
            newSortArray.push(arr1[leftArrayIndex]);
            leftArrayIndex++;
            rightArrayIndex++;
        }
    }
    for (let i = leftArrayIndex; i < arr1.length; i++){
        newSortArray.push(arr1[i]);
    }
    for (let i = rightArrayIndex; i < arr2.length; i++) {
        newSortArray.push(arr2[i]);
    }

    return newSortArray
};

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [1, 2, 3, 6, 20, 21];

mergeSorted(arr1, arr2);