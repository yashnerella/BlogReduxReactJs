/**
 * Created by yashw on 01-03-2017.
 */
import React, {Component} from 'react';
import Postcontainer from './Postcontainer';

import {connect} from 'react-redux';

class Posts extends Component{
    render(){
        return(
            <div>
                {this.props.posts.map((post)=> <Postcontainer key={post.id} postDetails={post}/>)}
            </div>
        );
    }
}

const mapStoreToProps = (store)=>{
  return {posts: store.posts}
};

export default connect(mapStoreToProps)(Posts);
