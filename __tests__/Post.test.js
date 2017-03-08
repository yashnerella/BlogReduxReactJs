/**
 * Created by yashw on 26-02-2017.
 */
import React from 'react';
import {shallow} from 'enzyme';

import Post from '../src/js/components/Post';

describe('Testing the structure of Post Container',()=>{
    let wrapper;

    beforeEach(()=>{
       wrapper = shallow(<Post/>);
    });

    test('Is the Post Container rendered?',()=>{
        expect(wrapper.find('Well').length).toBe(1);
    })
});