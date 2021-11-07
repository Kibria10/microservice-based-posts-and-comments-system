import React from 'react'
import PostCreate from './PostCreate';
import PostList from './PostList';
export default() => {
    return <div>
    <h1><i><u>Post IT</u></i></h1>
    <PostList />
    <hr />
    <PostCreate/>
    </div>;
};