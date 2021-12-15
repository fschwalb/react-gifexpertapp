import React from 'react';

import AddCategory from '../../components/AddCategory';
import { shallow } from "enzyme";


describe('Pruebas en <AddCategory />', () => {
    
    test('debe de mostrarse correctamente', () => {

        const setCategories = () => {};
        
        const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

        expect( wrapper ).toMatchSnapshot();

    });
    

});
