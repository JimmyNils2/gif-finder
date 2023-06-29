import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test-suit on AddCategory component', () => {

  //Arrange
  const testText = 'Pokemon';
  const testEmptyText = '';
  const testFunction = jest.fn();
  const testFunction2 = jest.fn();

  test('Should change input text value', () => {

    //Act
    render(
      < AddCategory
        //The component expect any function
        onNewCategory={() => { }}
      />
    );

    //Get text input
    const textInput = screen.getByRole('textbox');

    //Trigger event on text input
    fireEvent.input(textInput, { target: { value: testText } });

    // console.log(textInput);
    // screen.debug();

    //Assert
    expect(textInput.value).toBe(testText);
  });

  test('Should invoke onNewCategory function if the input length greater than 1', () => {

    //Act
    render(
      < AddCategory
        //The component expect any function
        onNewCategory={testFunction}
      />
    );

    const textInput = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //Trigger event on text input
    fireEvent.input(textInput, { target: { value: testText } });

    //Trigger event on form
    fireEvent.submit(form)

    //Assert
    expect(textInput.value).toBe('');
    //After the event, the references (textInput & form) are updated with a new value, so when the form is submitted, the next input is empty

    // Check if testFunct was invoked
    // expect(testFunction).toHaveBeenCalled();
    // expect(testFunction).toHaveBeenCalledTimes(1);
    expect(testFunction).toHaveBeenCalledWith(testText);
  });

  test('If the testInput is empty then the testFunct will never be called', () => {

    //Act
    render(
      < AddCategory
        onNewCategory={testFunction2}
      />);

    const textInput = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(textInput, { target: { value: testEmptyText } });
    fireEvent.submit(form);

    // expect(testFunction2).toHaveBeenCalledTimes(0);
    expect(testFunction2).not.toHaveBeenCalled();
  });
});