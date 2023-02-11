/* [EASY]
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


##Example 1:

Input: nums = [1,2,3,1]
Output: true

##Example 2:

Input: nums = [1,2,3,4]
Output: false

##Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

##Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/

function containsDuplicate(nums) {
  // let unique = [...new Set(nums)];
  // return nums.length === unique.length ? false : true;

  let map = {};
  let contains = false;

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else map[num]++;
  }

  for (let count in map) {
    if (map[count] > 1) contains = true;
  }

  return contains;
}
