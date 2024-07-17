
import React, { useState } from 'react';
import { updatePost } from '../api';

const UpdatePostForm = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, { title, body }).then(response => onPostUpdated(response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" className="update">Update Post</button>
    </form>
  );
};

export default UpdatePostForm;
