/**
 * Created by yashw on 08-03-2017.
 */
import React, {Component} from 'react';
import Navbar from './Navbar';

export default class Root extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                {this.props.children};
            </div>
        );
    }
}