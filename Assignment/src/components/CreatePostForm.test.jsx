
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreatePostForm from './CreatePostForm';
import { createPost } from '../api';

jest.mock('../api');

test('creates a new post', async () => {
  const post = { id: 1, title: 'New Post', body: 'This is a new post.' };
  createPost.mockResolvedValueOnce({ data: post });

  const handlePostCreated = jest.fn();
  render(<CreatePostForm onPostCreated={handlePostCreated} />);

  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'New Post' } });
  fireEvent.change(screen.getByPlaceholderText('Body'), { target: { value: 'This is a new post.' } });
  fireEvent.click(screen.getByText('Create Post'));

  await waitFor(() => expect(handlePostCreated).toHaveBeenCalledWith(post));
});
