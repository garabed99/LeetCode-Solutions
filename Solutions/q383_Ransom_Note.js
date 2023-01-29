/* [EASY]
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
 

##Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

##Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

##Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
*/

let canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  if (ransomNote.length !== null && magazine.length === 0) return false;

  for (character of ransomNote) {
    if (magazine.includes(character)) {
      magazine = magazine.replace(character, "");
    } else return false;
  }

  return true;
};
