/**
 * Created by yashw on 26-02-2017.
 */
import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../src/js/components/Navbar';

describe('Testing structure of Navbar',()=>{
    let wrapper;

    beforeEach(()=>{
         wrapper = shallow(<Navbar/>);
    });

    test('Is Navbar rendered?',()=>{
        expect(wrapper.find('Breadcrumb').length).toBe(1);
    });

    test('Are the navbar items rendered?',()=>{
       expect(wrapper.find('Breadcrumb').children().length).toEqual(2);
    });

    // test('Is the first node "Home" ?',()=>{
    //     expect(wrapper.find('BreadcrumbItem').first().text()).toEqual("Home");
    // });
});

//TO DO: Code to test the behaviour of the Navbar