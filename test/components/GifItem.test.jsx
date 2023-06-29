import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test-suite on the GifItem component', () => {

  //Arrange
  const testTitle = "Rock Lee";
  const testUrl = "https://www.google.com/";

  test('Should match the snapshot', () => {

    //Act
    const { container } = render(
      <GifItem
        title={testTitle}
        url={testUrl}
      />);

    //Assert
    expect(container).toMatchSnapshot();
  });

  test('Should display testTitle and testURL', () => {

    //Act
    render(
      <GifItem
        title={testTitle}
        url={testUrl}
      />);

    // screen.debug();

    //Assert
    const { src, alt } = screen.getByAltText(testTitle); //Img properties
    expect(src).toBe(testUrl);
    expect(alt).toBe(testTitle);
  });

  test('Should display testTile', () => {

    //Act
    render(
      <GifItem
        title={testTitle}
        url={testUrl}
      />);

    //Assert
    expect(screen.getByText(testTitle)).toBeTruthy();
  });
})