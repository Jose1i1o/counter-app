// console.log("Hello World")
// Run "npm run test" to see the errors that gives you the above line alone. When we enter that script automatically calls all documents with .test.js

// First pass a string, then a callback or a function
test('should be true', () => {
  const isActive = true;

  if( isActive ) {
    throw new Error('It is not active');
  }
})
