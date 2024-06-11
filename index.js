// String transformation
// capitalize
const test0 = 'ssa';
const test1 = 'this is new';
const test2 = ' this is new';
const capitalize = function(string) {
    const word = string.trim();
    return word.replace(word[0], word[0].toUpperCase());
}

// reverse(str)
const reverse = function (string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    };
    return reversedString;
}

// isPalindrome(str)
/**
 * initialize a start, mid and end variable 
 * loop through the string
 * if the start letter is not the same as the end letter return false
 * if the starting letter is the same as the ending letter and the start and end is not equal to the mid point increase the starting position and decrease the ending position
 * if the letter at position start is equal to letter at position end and the start and end is equal to the mid point return true
 * returns true or false
 */
const isPalindrome = function(string) {

}

