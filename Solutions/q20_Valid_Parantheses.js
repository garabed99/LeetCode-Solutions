/* [EASY]
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
##Example 1:

Input: s = "()"
Output: true

##Example 2:

Input: s = "()[]{}"
Output: true

##Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/

let isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;
  let stack = [];

  for (const el of s) {
    if (el === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (el === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (el === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(el);
    }
  }

  return stack.length === 0 ? true : false;
};
