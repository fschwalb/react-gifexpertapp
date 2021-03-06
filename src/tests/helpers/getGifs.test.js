import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('Saint Seiya');

        expect( gifs.length ).toBe( 16 );

    });

    test('debe de traer 0 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });
    

});
