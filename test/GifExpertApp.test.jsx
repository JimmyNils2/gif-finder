import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test-suite on GifExpertApp component', () => {

    //Arrange
    const testNewCategory = 'Goku';
    const testRepeatedCategory = 'Vegeta';

    test('Should add a new category', () => {

        render( < GifExpertApp />);
        

        const textInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        //Trigger event on text input
        fireEvent.input(textInput, {target: {value: testNewCategory}});
        fireEvent.submit(form)

        // screen.debug();

        //Assert
        const title = screen.getAllByRole('heading', {level: 3});
        expect(title.length).toBeGreaterThan(1);
    });

    test('Shouldn\'t add a new category', () => {

        render( < GifExpertApp />);
        

        const textInput = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        //Trigger event on text input
        fireEvent.input(textInput, {target: {value: testRepeatedCategory}});
        fireEvent.submit(form)

        // screen.debug();

        //Assert
        const title = screen.getAllByRole('heading', {level: 3});
        expect(title.length).toBeLessThan(2);
    });
});