
import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const tempId = Date.now();

    
    const newPost = { id: tempId, title, body };
    onPostCreated(newPost);

    createPost({ title, body }).then(response => {

      onPostCreated({ ...newPost, id: response.data.id });
    }).catch(error => console.error('Error creating post:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" className="create">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
