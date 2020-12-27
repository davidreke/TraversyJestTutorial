// functions = require('./functions')

const functions = require("./functions");

// runs before and after each function
// beforeEach(()=>{initDatabase()});
// afterEach(()=>{closeDatabase()});

// run once before all the tests and once after all the tests

beforeAll(()=>{initDatabase()});
afterAll(()=>{closeDatabase()});

// use describe to select specific functions

const nameCheck = () => {
    console.log('Checking Name..')
}

describe('Checking names', () => {
    beforeEach(()=>{
        nameCheck();

        test('User is Jeff', () => {
            const user = 'Jeff';
            expect(user).toBe('Jeff')
        })

        test('User is Karen', () => {
            const user = 'Karen';
            expect(user).toBe('Karen')
        })
    })
})


const initDatabase = () => {
    console.log('Database Initialized...')
}
const closeDatabase = () => {
    console.log('Database closed...')
}

test('2 + 2 =4', () => {
    expect(functions.add(2,2)).toBe(4)
});

test('2 + 2 !== 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
});

// // CHECK FOR TRUTHY & FALSY FALUES
// // toBeNull matches only null
// // toBeUndefined
// // toBeDefined
// // toBeTruthy
// // toBeFalsy

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(2)).toBeFalsy;
});

// // Can't use toBe on an ojbect, use toEqual instead
test('user should be David Reke Oboject', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'David',
        lastName: 'Reke'

    })
}) 

// Less than and greater than

test('should be under 1600', () =>{
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// // Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

// // arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
})


// working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// async await
// test('User fetched name should be Leanne Graham', async () => {
//   expect.assertions(1);
//   const data =  await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//   ;
// });
