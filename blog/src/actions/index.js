import jsonPlaceholder from "../apis/jsonPlaceholder";

//Action creator
export const fetchPost = () => {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POST',
            payload: response
        });
    };
};