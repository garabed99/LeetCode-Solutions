/* [MEDIUM]
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

##Example 1:

Input: x = 123
Output: 321

##Example 2:

Input: x = -123
Output: -321

##Example 3:

Input: x = 120
Output: 21
 

##Constraints:

-2^31 <= x <= 2^31 - 1
*/

let reverse = function (x) {
  let stringNum = x + "";

  if (stringNum[0] === "-") {
    let minus = stringNum.slice(0, 1);
    let reversed = stringNum
      .replace(stringNum[0], "")
      .split("")
      .reverse()
      .join("");
    let result = Number(minus + reversed);

    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) - 1) {
      return 0;
    } else return result;
  }

  let reversed = stringNum.split("").reverse().join("");
  let result = Number(reversed);

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) - 1) {
    return 0;
  } else return result;
};
