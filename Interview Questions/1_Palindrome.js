// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

const isPalindrome = (num) => {
  if (num < 0) {
    return false;
  }
  return num === Number(num.toString().split('').reverse().join(''));
};

console.log(isPalindrome(121));
