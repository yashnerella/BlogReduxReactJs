/**
 * Created by yashw on 01-03-2017.
 */
import blogActionConstants from '../constants/blogActionConstants';

let afterPostingActions = {
    likePost: (postId)=>{
        return {
            type: blogActionConstants.LIKE_POST,
            payload: postId
        }
    },
    dislikePost: (postId)=>{
        return {
            type: blogActionConstants.DISLIKE_POST,
            payload: postId
        }
    },
    commentOnPost: (postId, comment)=>{
        return {
            type: blogActionConstants.COMMENT_ON_POST,
            payload: {
                postId: postId,
                comment: comment
            }
        }
    }
};

export default afterPostingActions;