// src/components/DeletePostButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeletePostButton from './DeletePostButton';
import { deletePost } from '../api';

jest.mock('../api');

test('deletes a post', async () => {
  const postId = 1;
  deletePost.mockResolvedValueOnce({});

  const handlePostDeleted = jest.fn();
  render(<DeletePostButton postId={postId} onPostDeleted={handlePostDeleted} />);

  fireEvent.click(screen.getByText('Delete Post'));

  await waitFor(() => expect(handlePostDeleted).toHaveBeenCalledWith(postId));
});
