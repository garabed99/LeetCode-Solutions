/* [EASY]
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

##Example 1:

Input: nums = [3,2,3]
Output: 3

##Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

##Constraints:

n == nums.length
1 <= n <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

function majorityElement(nums) {
  let maxCounter = 0;
  let majorityElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) counter++;
    }
    if (maxCounter < counter) {
      maxCounter = counter;
      majorityElement = nums[i];
    }
  }

  return majorityElement;
};
