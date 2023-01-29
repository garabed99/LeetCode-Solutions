/* [EASY]
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


##Example 1:

Input: s = "hello"
Output: "holle"

##Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 10^5
s consist of printable ASCII characters.
*/

let reverseVowels = function (s) {
  let vowelsInStr = [];
  let regEx = /[aeiou]/gi;
  let result = [];
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regEx)) {
      vowelsInStr.push(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regEx)) {
      temp = vowelsInStr.pop();
      result.push(temp);
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
};
