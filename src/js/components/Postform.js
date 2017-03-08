/**
 * Created by yashw on 26-02-2017.
 */
import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Radio, Button, Modal} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import submitPost from '../actions/beforePostingActions';

class Postform extends Component {
    constructor(){
        super();
        this.state = {
            postObject: {
                id: 0,
                title: "",
                author: "",
                category: "Movies",
                gender: "",
                postContent: ""
            },
            showPostContentEntry: false,
            showCreatePostButton: true,
            showSubmitPostButton: true
        };

        this._handleOnChangeTitle = this._handleOnChangeTitle.bind(this);
        this._handleOnChangeAuthor = this._handleOnChangeAuthor.bind(this);
        this._handleOnChangeCategory = this._handleOnChangeCategory.bind(this);
        this._handleOnChangeGender = this._handleOnChangeGender.bind(this);
        this._handleOnClickCreatePost = this._handleOnClickCreatePost.bind(this);
        this._handleOnChangePostContent = this._handleOnChangePostContent.bind(this);
        this._handleOnClickSubmitPost = this._handleOnClickSubmitPost.bind(this);
    }

    _handleOnChangeTitle(event){
        let postObject = this.state.postObject;
        postObject.title = event.target.value;
        this.setState({
            postObject: postObject
        });
    }
    _handleOnChangeAuthor(event){
        let postObject = this.state.postObject;
        postObject.author = event.target.value;
        this.setState({
            postObject: postObject
        });
    }
    _handleOnChangeCategory(event){
        let postObject = this.state.postObject;
        postObject.category = event.target.value;
        this.setState({
            postObject: postObject
        });
    }
    _handleOnChangeGender(changeEvent){
        let postObject = this.state.postObject;
        postObject.gender = changeEvent.target.value;
        this.setState({
            postObject: postObject
        });
    }
    _handleOnClickCreatePost(){
        this.setState({
            showPostContentEntry: true
        });
    }
    _handleOnChangePostContent(event){
        let postObject = this.state.postObject;
        postObject.postContent = event.target.value;
        this.setState({
            postObject: postObject
        });
    }
    _handleOnClickSubmitPost(){
        let prevId = this.state.postObject.id;
        prevId++;
        let currId = prevId;
        let postObject = this.state.postObject;
        postObject.id = currId;
        this.setState({
            postObject: postObject
        });
        this.props.submitPost(this.state.postObject);
        this.setState({
            postObject: {
                id: currId,
                title: "",
                author: "",
                category: "Movies",
                gender: "",
                postContent: ""
            },
            showPostContentEntry: false,
            showCreatePostButton: true,
            showSubmitPostButton: true
        });
    }
    close() {
        this.setState({
            showPostContentEntry: false
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <FormGroup controlId="userPostTitle">
                        <ControlLabel>Title of the post:</ControlLabel>
                        <FormControl type="text" placeholder="Enter the title of the post..." onChange={this._handleOnChangeTitle} value={this.state.postObject.title}/>
                    </FormGroup>
                    <FormGroup controlId="userPostAuthor">
                        <ControlLabel>Author of the post:</ControlLabel>
                        <FormControl type="text" placeholder="Enter your name..." onChange={this._handleOnChangeAuthor} value={this.state.postObject.author}/>
                    </FormGroup>
                    <FormGroup controlId="userPostCategory">
                        <ControlLabel>Category:</ControlLabel>
                        <FormControl componentClass="select" onChange={this._handleOnChangeCategory} value={this.state.postObject.category}>
                            <option value="Movies">Movies</option>
                            <option value="Sports">Sports</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="userGender">
                        <ControlLabel>Gender:</ControlLabel><br/>
                        <Radio name="genderGroup" value="m" inline onChange={this._handleOnChangeGender}>Male</Radio>
                        <Radio name="genderGroup" value="f" inline onChange={this._handleOnChangeGender}>Female</Radio>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this._handleOnClickCreatePost} disabled={!this.state.showCreatePostButton}>
                        Create Post
                    </Button>
                </form>
                <Modal bsSize="large" show={this.state.showPostContentEntry} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Type the content for your post below:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl bsSize="large" componentClass="textarea" placeholder="Enter your content here..." onChange={this._handleOnChangePostContent} value={this.state.postObject.postContent}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                        <Button bsStyle="primary"  onClick={this._handleOnClickSubmitPost} disabled={!this.state.showSubmitPostButton}>Submit Post</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({submitPost: submitPost},dispatch)
};

export default connect(null,mapDispatchToProps)(Postform);

