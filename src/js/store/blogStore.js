/**
 * Created by yashw on 28-02-2017.
 */
import { createStore } from 'redux';

import blogReducer from '../reducers/blogReducer';

const store = createStore(blogReducer);

export default store;
