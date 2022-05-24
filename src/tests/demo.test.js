// console.log("Hello World")
// Run "npm run test" to see the errors that gives you the above line alone. When we enter that script automatically calls all documents with .test.js

// First test
// Explanation: First pass a string, then a callback or a function

// test('should be true', () => {
//   const isActive = true;



//   if( isActive ) {
//     throw new Error('It is not active');
//   }
// })

// Second Test
// test('all strings must be the same', () => {
//   // 1. Init
//   const message = 'Hello World';

//   // 2. Stimulate
//   const message2 = `Hello World`;

//   // 3. Check the behavior
//   expect(message).toBe(message2);

// })


// Third Step
// Group Second Test inside a describe function

describe('Block of tests inside demo.test.js file', () => {

  test('all strings must be the same', () => {
  // 1. Init
  const message = 'Hello World';

  // 2. Stimulate
  const message2 = `Hello World`;

  // 3. Check the behavior
  expect(message).toBe(message2);

})
})
