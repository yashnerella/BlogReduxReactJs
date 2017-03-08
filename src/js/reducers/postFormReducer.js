/**
 * Created by yashw on 28-02-2017.
 */
import blogActionConstants from '../constants/blogActionConstants';

let postFormReducer = (state=[], action)=>{
    let newState = [];
    let updatedPost = {};
    let newComments = [];
    switch(action.type){
        case blogActionConstants.SUBMIT_POST:
            return [...state, {id: state.length + 1,
                               title: action.payload.title,
                               author: action.payload.author,
                               category: action.payload.category,
                               gender: action.payload.gender,
                               postContent: action.payload.postContent,
                               likes: 0,
                               dislikes: 0,
                               comments: []}];
        case blogActionConstants.LIKE_POST:
             newState = [...state];
             updatedPost = {};
             newState.map((post,i)=>{
                 if(post.id === action.payload){
                     updatedPost = {...post, likes: post.likes+1};
                    newState.splice(i,1);
                    newState.splice(i,0,updatedPost);
                 }
             });
            return newState;
        case blogActionConstants.DISLIKE_POST:
             newState = [];
             updatedPost = {};
             newState = [...state];
             newState.map((post,i)=>{
                if(post.id === action.payload){
                    updatedPost = {...post, dislikes: post.dislikes+1};
                    newState.splice(i,1);
                    newState.splice(i,0,updatedPost);
                }
             });
             return newState;
        case blogActionConstants.COMMENT_ON_POST:
             newState = [];
             updatedPost = {};
             newState = [...state];
             newState.map((post,i)=>{
                 if(post.id === action.payload.postId){
                     newComments = [...post.comments];
                     newComments = newComments.concat(action.payload.comment);
                     updatedPost = {...post, comments: newComments};
                     newState.splice(i,1);
                     newState.splice(i,0,updatedPost);
                 }
             });
             return newState;
        default:
            return state;
    }
};

export default postFormReducer;