import cheers from "../../utils/02-template-string";

describe('Testing 02-template-strings.js', () => {
  test('cheer f(x) should return "Hello Fernando"', () => {

    const firstName = 'Fernando';

    const hello = cheers(firstName);

    expect(hello).toBe('Hello ' + firstName);
  })

  // test number 2
  // Should there not be a firstName argument cheers "should return Hello Lola!"

  test('if there is no firstName argument return "Hello Lola"', () => {
    const hello = cheers();
    expect( hello ).toBe('Hello Lola');
  })
})