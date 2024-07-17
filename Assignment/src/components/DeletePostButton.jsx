// src/components/DeletePostButton.js
import React from 'react';
import { deletePost } from '../api';

const DeletePostButton = ({ postId, onPostDeleted }) => {
  const handleDelete = () => {
    deletePost(postId).then(() => onPostDeleted(postId)).catch(error => console.error('Error deleting post:', error));
  };

  return <button onClick={handleDelete} className="delete">Delete Post</button>;
};

export default DeletePostButton;
