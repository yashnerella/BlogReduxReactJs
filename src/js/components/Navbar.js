/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/app"} activeStyle={{color: "red"}}>App</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}