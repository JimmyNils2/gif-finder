import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs} from '../../src/hooks/useFetchGifs';

//Create a Hook mock
jest.mock('../../src/hooks/useFetchGifs');

describe('Test-suite on GifGrid component', () =>{
    
    //Arrange
    const testText = 'Pokemon';
    const testGifs = [
        {
            id: '001',
            title: 'title1',
            url: 'https://url1/image1.jpg'
        },
        {
            id: '002',
            title: 'title2',
            url: 'https://url1/image2.jpg'
        }
    ]

    test('Should display the loading in the initial state', () => {

        //Act

        //Simulate hook return
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(< GifGrid category={testText}/>);
        // screen.debug();

        //Assert
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(testText));
    });

    test('Should display images after invoke useFetchGifs', () => {

        //Act
        useFetchGifs.mockReturnValue({
            images: testGifs,
            isLoading: false
        });

        render(< GifGrid category={testText}/>);

        const images = screen.getAllByAltText(/^title/);

        //Assert
        expect(images.length).toBe(2);
    });
});