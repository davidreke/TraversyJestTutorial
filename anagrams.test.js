const isAnagram = require('./anagrams')

test('isAnagram function exists', () =>{
    expect(typeof isAnagram).toEqual('function')
})

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Hello is not an anagram of aloha', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
})