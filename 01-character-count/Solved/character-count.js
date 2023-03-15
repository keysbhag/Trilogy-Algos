// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var majorityElement = function (nums) {
  let numMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in numMap) {
      numMap[num]++
    } else {
      numMap[num] = 1;
    }
  }
  let highestNum = nums[0];

  for (let num in numMap){
    if (numMap[num] > numMap[highestNum]){
      highestNum = num
    }
  }

  console.log(highestNum);
  console.log(numMap);
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);