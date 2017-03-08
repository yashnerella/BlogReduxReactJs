/**
 * Created by yashw on 26-02-2017.
 */
import React from 'react';
import {shallow} from 'enzyme';

import Postform from '../src/js/components/Postform';

describe('Testing the structure of User Postform', ()=>{
    let wrapper;

    beforeEach(()=>{
       wrapper = shallow(<Postform/>);
    });

    test('Is User Postform rendered?',()=>{
        expect(wrapper.find('form').length).toBe(1);
    });

    test('Does the form tag contain 2 formgroups',()=>{
        expect(wrapper.find('FormGroup').length).toBe(3);
    });

    test('Does the form tag contain radio buttons',()=>{
        expect(wrapper.find('Radio').length).toBe(2);
    });

    test('Is the "Create Post" button rendered?',()=>{
        expect(wrapper.find('Button').length).toBe(1);
    });
});

describe('Testing the behaviour of Postform', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Postform/>);
    });

    test('Checking initial state',()=>{
        expect(wrapper.state().title).toBe("");
        expect(wrapper.state().category).toBe("Movies");
    });

    test('Does state change reflect?', ()=>{
        wrapper.setState({
            title: "New State"
        });
        expect(wrapper.state().title).toBe("New State");
    });

});