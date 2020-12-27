const reverseString = require('./reverseString');

test('reverse String Funciton Exists', () => {
    expect(reverseString).toBeDefined();

});

test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});