import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test-suite on useFetchGifs hook', () => {

    //Arrange
    const testText = 'Pokemon';
    const testImagesLength = 10;

    test('Should display loading (true) and no images', () => {

        //Act
        const { result } = renderHook( () => useFetchGifs(testText));
        const { images, isLoading } = result.current;
        
        //Assert
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Should return loading (false) and images', async () => {

        //Act
        const { result } = renderHook( () => useFetchGifs(testText));
        
        await waitFor( () => {
            //Await for the promise
            expect(result.current.images.length).toBeGreaterThan(0);
        });
        
        const { images, isLoading } = result.current;
        
        //Assert
        expect(images.length).toBeGreaterThanOrEqual(testImagesLength);
        expect(isLoading).toBeFalsy();
    });
});