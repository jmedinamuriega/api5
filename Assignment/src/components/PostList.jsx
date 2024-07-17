
import React from 'react';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);

export default PostList;
