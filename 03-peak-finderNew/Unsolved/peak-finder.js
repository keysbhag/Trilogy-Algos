const peakFinder = function(nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  let max = nums[0];

  for (let i = 1; i < nums.length; i++){
    if (max < nums[i]){
      max = nums[i];
    }
  }

  return max;
};
