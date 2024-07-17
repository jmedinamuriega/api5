// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import UpdatePostForm from './components/UpdatePostForm';
import DeletePostButton from './components/DeletePostButton';
import { fetchPosts } from './api';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(response => setPosts(response.data));
  }, []);

  const handlePostCreated = (post) => {
    setPosts(prevPosts => {
      // Check if the post with the temporary ID already exists
      const existingPostIndex = prevPosts.findIndex(p => p.id === post.id);
      if (existingPostIndex >= 0) {
        // Replace the temporary post with the actual post
        const updatedPosts = [...prevPosts];
        updatedPosts[existingPostIndex] = post;
        return updatedPosts;
      }
      return [...prevPosts, post];
    });
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="container">
      <h1>JSONPlaceholder Posts</h1>
      <CreatePostForm onPostCreated={handlePostCreated} />
      <PostList posts={posts} />
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <UpdatePostForm post={post} onPostUpdated={handlePostUpdated} />
          <DeletePostButton postId={post.id} onPostDeleted={handlePostDeleted} />
        </div>
      ))}
    </div>
  );
};

export default App;
