// String transformation
// capitalize
/**
 * input => string
 * go through the string and take the 1st letter
 * alt
 * find the first letter, that is the index of the first letter
 * use the replace method to replace the first letter with upperCased letter
 */
const test0 = 'this';
const test1 = 'this is new';
const test2 = ' this is new';
const capitalize = function(string) {
    const word = string.trim();
    return word.replace(word[0], word[0].toUpperCase());
}

console.log(capitalize(test0));
console.log(capitalize(test1));
console.log(capitalize(test2));