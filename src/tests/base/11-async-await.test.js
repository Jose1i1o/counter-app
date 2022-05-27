import { getImage } from "../../utils/11-async-await.js"

describe('testing async-await and fetch', () => {
  test('should return the url of the image', async() => {

    const url = await getImage();
    // expect( typeof url ).toBe('string');
    expect( url.includes('https://' )).toBe( true );

  })
})