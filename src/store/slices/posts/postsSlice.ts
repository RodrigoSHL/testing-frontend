import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
    id?: string;
    name: string;
    description: string;
}

interface PostsState {
    posts: Post[];
    isLoading: boolean;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        start: (state) => { 
            state.isLoading = true;
        },
        setPosts: (state, action) => { 
            state.isLoading = false;
            state.posts = action.payload;
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        searchPost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((post) => post.name.includes(action.payload));
        }
    },
});

export const { addPost, removePost, start, setPosts, searchPost } = postsSlice.actions;