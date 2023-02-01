/* [EASY]
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 
##Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

##Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

##Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
*/

function findMaxConsecutiveOnes(nums) {
  let maxCounter = 0;
  let counter = 0;

  if ((nums.length === 1) & (nums[0] === 1)) return 1;
  if ((nums.length === 1) & (nums[0] === 0)) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter = 0;
    } else {
      counter++;
      maxCounter = Math.max(counter, maxCounter);
    }
  }
  return maxCounter;
}
