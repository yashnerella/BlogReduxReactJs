/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';

import Post from './Post';
import Comment from './Comment';

export default class PostContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let postDetails = this.props.postDetails;
        return(
            <div className="post-container">
                <Post postDetails={postDetails}/>
                {this.props.postDetails.comments.map((comment, i)=> <Comment key={i} comment={comment}/>)}
            </div>
        );
    }
}
