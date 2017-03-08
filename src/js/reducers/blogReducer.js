/**
 * Created by yashw on 28-02-2017.
 */
import { combineReducers } from 'redux';

import postFormReducer from '../reducers/postFormReducer';
import postExtrasReducer from '../reducers/postExtrasReducer';

const blogReducer = combineReducers({
    posts: postFormReducer
});

export default blogReducer;