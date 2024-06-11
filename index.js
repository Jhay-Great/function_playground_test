// String transformation
// capitalize
const test0 = "ssa";
const test1 = "this is new";
const test2 = " this is new";
const capitalize = function (string) {
  const word = string.trim();
  return word.replace(word[0], word[0].toUpperCase());
};

// reverse(str)
const reverse = function (string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

// isPalindrome(str)
/**
 * initialize a start, mid and end variable
 * loop through the string
 * if the start letter is not the same as the end letter return false
 * if the starting letter is the same as the ending letter and the start and end is not equal to the mid point increase the starting position and decrease the ending position
 * if the letter at position start is equal to letter at position end and the start and end is equal to the mid point return true
 * returns true or false
 */
const isPalindrome = function (string) {
    let start = 0;
    let end = string.length - 1;
    let mid = Math.floor((start + end) / 2);
    
    for (let i = 0; i < string.length; i++) {
        // alt 3.0
        console.log(string[i], string[string.length - 1 - i])

        // alt 2.0
        // if (string[start + i] !== string[end - i]) {
        //     console.log(string[start], string[end]);
        //     return false
        // };
        // if (start === end && string[start] === string[end]) {
        //     console.log(string[start], string[end]);
        //     return true; 
        // }

        // console.log(string[start], string[end], 'nil')
        
        // alt 1.0
        // if (mid === start && mid === end && ) 
        
        // let start = i;
        // let end = (string.length - i) - 1;



        // console.log('mid: ', mid);
    }
    
    
    
//     let start, end, mid;
    
//   for (let i = 0; i < string.length; i++) {
//     start = i;
//     end = string.length - i;
//     mid = Math.floor((start + end) / 2);

//     console.log(start, end, mid);
//   }
};
console.log(isPalindrome(test0));
console.log(isPalindrome(test1));
console.log(isPalindrome('civic'))


// wordCount(str);
const wordCount = function (string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += 1;
  }
  return count;
};

// Array Transformation
// double
const array = [1, 2, 3, 4];
const double = function (array) {
  return array.map((element) => element * 2);
};

// filterEven
const filterEven = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
      continue;
    }
  }
  return newArray;
};

// sum(arr)
const sum = function (array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

// average(arr)
const average = function (array) {
  let sum = array[0];
  let length = array.length;

  console.log(length);

  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }

  return sum / length;
};

// Object transformations
// fullName(person)
const fullName = function (person) {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
};

// isAdult(person)
const isAdult = function (person) {
  const { age } = person;
  if (age >= 18) {
    return true;
  }
  return false;
};

// filterByAge(people, minAge)
const filterByAge = function(people, minAge = 18) {
    return people.filter(person => person.age >= minAge)
}
const people = [
    {name: 'john', age: 23},
    {name: 'elsie', age: 13},
    {name: 'jake', age: 19},
]
// console.log(filterByAge(people, 20))

// function composition
/**
 * a function that accepts multiple inputs functions and executes the functions
 * eg. double all even numbers in an array
 */
const compose = function(...fns) {
    console.log(fns);


}
// console.log(compose(array, filterEven, double));

