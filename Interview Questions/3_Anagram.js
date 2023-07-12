// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

const isAnagram1 = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const objS = {};
  const objT = {};

  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = (objS[s[i]] || 0) + 1;
    objT[t[i]] = (objT[t[i]] || 0) + 1;
  }

  for (const key in objS) {
    if (objS[key] !== objT[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram1('anagram', 'nagaram'), isAnagram2('anagram', 'nagaram'));
