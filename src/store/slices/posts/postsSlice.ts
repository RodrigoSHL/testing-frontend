import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
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
            console.log(action.payload);
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action: PayloadAction<number>) => {
            state.posts.splice(action.payload, 1);
        },
    },
});

export const { addPost, deletePost, start, setPosts } = postsSlice.actions;