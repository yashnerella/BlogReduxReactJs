/**
 * Created by yashw on 01-03-2017.
 */
import blogActionConstants from '../constants/blogActionConstants';

let postExtrasReducer = (state=[], action)=>{
    switch(action.type){
        case blogActionConstants.LIKE_POST:
                return state;
            break;
        case blogActionConstants.DISLIKE_POST:
                return state;
                break;
        case blogActionConstants.COMMENT_ON_POST:
                return state;
                break;
        default:
                return state;
    }
};

export default postExtrasReducer;