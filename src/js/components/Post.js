/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';
import {Well, Media, Button, Collapse} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import afterPostingActions from '../actions/afterPostingActions';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.postDetails.id,
            toggleCollapse: false,
            comment: "",
        };
        this._handleDislikeClick = this._handleDislikeClick.bind(this);
        this._handleLikeClick = this._handleLikeClick.bind(this);
        this._handleCommentClick = this._handleCommentClick.bind(this);
        this._handleOnChangeComment = this._handleOnChangeComment.bind(this);
        this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
    }

    _handleAuthorAvatar(){
        if(this.props.postDetails.gender === "m")
            return <img width={64} height={64} src={require('../../../media/gent.png')} alt={this.state.author}/>
        else if(this.props.postDetails.gender === "f")
            return <img width={64} height={64} src={require('../../../media/lady.png')} alt={this.state.author}/>
    }

    _handleLikeClick(){
        this.props.likePost(this.state.id);
    }

    _handleDislikeClick(){
        this.props.dislikePost(this.state.id);
    }

    _handleOnChangeComment(event){
        this.setState({
            comment: event.target.value
        });
    }

    _handleCommentClick(){
        let tgleClps = this.state.toggleCollapse;
        this.setState({
            toggleCollapse: !tgleClps
        });
    }

    _handleCommentSubmit(event){
        event.preventDefault();
        this.props.commentOnPost(this.state.id,this.state.comment);
        this.setState({
            comment: "",
            toggleCollapse: false,
        });
    }

    render(){
        return(
            <div className="container">
                <Well>
                    <Media>
                        <Media.Left>
                            {this._handleAuthorAvatar()}
                            <small>{this.props.postDetails.author}</small>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{this.props.postDetails.title}</Media.Heading>
                            <p>{this.props.postDetails.postContent}</p>
                        </Media.Body>
                    </Media><hr/>
                    <Button onClick={this._handleLikeClick} bsStyle="link"><span className="glyphicon glyphicon-thumbs-up"></span> Like {this.props.postDetails.likes}</Button>&emsp;
                    <Button onClick={this._handleDislikeClick} bsStyle="link"><span className="glyphicon glyphicon-thumbs-down"></span> Dislike {this.props.postDetails.dislikes}</Button>&emsp;
                    <Button onClick={this._handleCommentClick} bsStyle="link"><span className="glyphicon glyphicon-comment"></span> Comment {this.props.postDetails.comments.length}</Button>
                    <div>
                        <Collapse in={this.state.toggleCollapse}>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" size="50" placeholder="Write your comment..." onChange={this._handleOnChangeComment} value={this.state.comment}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" onClick={this._handleCommentSubmit}>Comment</button>
                                        </div>
                                </div>
                            </form>
                        </Collapse>
                    </div>
                </Well>
            </div>
        );
    }
}


let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({likePost: afterPostingActions.likePost,
                               dislikePost: afterPostingActions.dislikePost,
                               commentOnPost: afterPostingActions.commentOnPost},dispatch)
};

export default connect(null,mapDispatchToProps)(Post);
