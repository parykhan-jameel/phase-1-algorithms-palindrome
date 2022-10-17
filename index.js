function isPalindrome(word) {
  // Write your algorithm here
  if(word === word.split("").reverse().join("")) {
    return true
  }
  else {
    return false
  }
}


/* 
  We split the word and then reverse the letters and rejoin them again.
  Then we do the check. If the orignal word is the same after reversing
  --> the word is Palindrome (true). Otherwise it is not (false).
*/

/*
  Add written explanation of your solution here
   palindrom mean the reading of the worl will not change when you switch letter 
  funciton that will check if it is a plaindrom or not 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
