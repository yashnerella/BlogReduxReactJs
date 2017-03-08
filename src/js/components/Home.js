/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Navbar from './Navbar';


export default class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Navbar/>
                <Jumbotron>
                <h1>Public Blog</h1>
                <p>This app allows general public to add their posts on specific categories!</p>
                </Jumbotron>
            </div>
        );
    }
}