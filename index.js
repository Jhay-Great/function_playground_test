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
/**
 * go through the string
 * define a new variable that to store the reverse characters
 * start taking the letters from the last character
 * concatenate the letters into the defined reverse variable
 */
const reverse = function (string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    };
    return reversedString;
}
console.log(reverse(test0));
console.log(reverse(test1));
console.log(reverse(test2));
