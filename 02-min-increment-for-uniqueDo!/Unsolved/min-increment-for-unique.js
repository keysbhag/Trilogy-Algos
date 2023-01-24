// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++){
        let num = nums[i];

        if (num in nums){
          
        } else {
            numMap[num] = 1  
        }
    }
};
