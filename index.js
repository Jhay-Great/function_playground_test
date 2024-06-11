// String transformation
// capitalize
/**
 * input => string
 * go through the string and take the 1st letter
 * alt
 * find the first letter, that is the index of the first letter
 * use the replace method to replace the first letter with upperCased letter
 */
const test = 'this';
const capitalize = function(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

console.log(capitalize(test));