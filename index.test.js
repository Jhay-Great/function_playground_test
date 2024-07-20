const {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
  } = require('./index');

test('should capitalize the first letter of a string', () => { 
    expect(capitalize('good')).toBe('Good');
    // expect(capitalize('this is a good boy')).toBe('This Is A Good Boy');
 })

test('should reverse a string', () => {
    expect(reverse('please')).toBe('esaelp');
    expect(reverse('please buy me')).toBe('em yub esaelp');
})

test('should checks if a string is a palindrome', () => {
    expect(isPalindrome('sum')).toBe(false);
    expect(isPalindrome('piip')).toBe(true); // didn't pass test
    expect(isPalindrome('civic')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
})

test('should count the number of words in a string', () => {
    expect(wordCount('this is new')).toBe(3);
    expect(wordCount('boy')).toBe(1);
    expect(wordCount('welcome to AmaliTech frontend engineering team')).toBe(6);
})

test('should double every number in the array', () => {
    expect(double([1,2,3,4])).toStrictEqual([2, 4, 6, 8]);
    expect(double([1,0])).toStrictEqual([2, 0]);
    expect(double([-1])).toStrictEqual([-2]);
})

test('should filter out even numbers from an array', () => {
    expect(filterEven([1,2,4,3,8])).toStrictEqual([2,4,8]);
    expect(filterEven([1,3])).toStrictEqual([]);
    expect(filterEven([12])).toStrictEqual([12]);
})

test('should calculate the sum of all numbers in an array', () => {
    expect(sum([1,3,4,2])).toStrictEqual(10);
    expect(sum([0, 0, 0])).toStrictEqual(0);
})

test('should calculate the average of all numbers in an array', () => {
    expect(average([1,3,4,2])).toStrictEqual(2.5);
    expect(average([0, 0, 0])).toStrictEqual(0);
    expect(average([-10, 10, -10, 10])).toStrictEqual(0);
})


test('should return the full name of a person object', () => {
    expect(fullName({firstName: 'caleb', lastName: 'evans'})).toStrictEqual('caleb evans')
})

test('should check if a person is 18 or older', () => {
    expect(isAdult({age: 12})).toStrictEqual(false);
    expect(isAdult({age: 18})).toStrictEqual(true);
    expect(isAdult({age: 28})).toStrictEqual(true);
})

test('should filter out and keep person with a min age of specified', () => {
    const arr = [
        {name: 'foli', age: 32},
        {name: 'yaa', age: 16},
        {name: 'jane', age: 22},
        {name: 'fabio', age: 13},
    ]
    expect(filterByAge(arr, 30)).toStrictEqual([{name: 'foli', age: 32}])
    expect(filterByAge(arr)).toStrictEqual([{name: 'foli', age: 32}, {name: 'jane', age:22}])
    expect(filterByAge(arr, 12)).toStrictEqual(
        [
            {name: 'foli', age: 32},
            {name: 'yaa', age: 16},
            {name: 'jane', age: 22},
            {name: 'fabio', age: 13}, 
        ]
    )
})


test('should combine multiple functions and return the results from the two functions used', () => {

    const reverseAndCapitalize = compose(capitalize, reverse);
    const filterEvenNumbersAndDouble = compose(double, filterEven);
    
    expect(reverseAndCapitalize('hello')).toStrictEqual('Olleh');
    expect(filterEvenNumbersAndDouble([1,2,3,8])).toStrictEqual([4, 16]);
})


