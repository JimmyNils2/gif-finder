import { getGifs } from "../../src/helpers/getGifs"

describe('Test-suite on getGif function', () => {

  //Arrange
  const testGif = 'Goku';

  test('Should return a gif array', async () => {

    //Act
    const gifArray = await getGifs(testGif);

    //Assert
    // console.log(gifArray);

    //Check length
    expect(gifArray.length).toBeGreaterThan(0);

    //Check properties
    expect(gifArray[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),

    });
  })
});