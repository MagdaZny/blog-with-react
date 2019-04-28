import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    const endpoint = `https://jsonplaceholder.typicode.com/posts`;
    fetch(endpoint)
        .then((response) => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}


export const createPost = (post) => dispatch => {
    console.log('create post')
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
}