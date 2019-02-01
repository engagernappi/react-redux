import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

//Action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost())
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    const users = userIds.forEach(id => dispatch(fetchUser(id)));
    console.log(users);
};

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};