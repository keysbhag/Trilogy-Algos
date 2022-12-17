// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    for (let i = 0; i < str.length/2; i++) {
        console.log(str[i]);
        console.log(str[str.length - i - 1]);
        if (str[i] !== str[str.length - i - 1]){
            return false
        }
    }
    return true
};
