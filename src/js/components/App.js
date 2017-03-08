/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';
import Postform from './Postform';
import Posts from './Posts';
import Navbar from './Navbar';

export default class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Postform/><hr/>
                <Posts/>
            </div>
        );
    }
}