/**
 * Created by yashw on 28-02-2017.
 */
import blogActionConstants from '../constants/blogActionConstants';

let submitPost = (postObject)=>{
    return {
        type: blogActionConstants.SUBMIT_POST,
        payload: postObject
    }
};

export default submitPost;