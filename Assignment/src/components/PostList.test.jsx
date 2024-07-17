
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostList from './PostList';
import { fetchPosts } from '../api';

jest.mock('../api');

test('fetches and displays posts', async () => {
  const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
  fetchPosts.mockResolvedValueOnce({ data: posts });

  render(<PostList />);

  await waitFor(() => expect(screen.getByText('Post 1')).toBeInTheDocument());
  expect(screen.getByText('Post 2')).toBeInTheDocument();
});
