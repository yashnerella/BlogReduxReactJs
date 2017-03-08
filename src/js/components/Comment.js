/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';

export default class Comment extends Component{
    render(){
        return(
            <div className="pre-comment pre-scrollable-comment">
                {this.props.comment}
            </div>
        );
    }
}