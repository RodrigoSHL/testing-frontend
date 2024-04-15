import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  name: string;
  description: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts.splice(action.payload, 1);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;