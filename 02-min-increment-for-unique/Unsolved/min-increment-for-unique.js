// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let numMap =[];
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];

        if (numMap.includes(num)){
          while (numMap.includes(num)){
            console.log("here 1")
            num++
            count++
          }
          numMap.push(num)
        } else {
            console.log("here 2");
            numMap.push(num)  
        }
    }
    console.log(numMap);
    return count;
};

minIncrement([1,2,2])