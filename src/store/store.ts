import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { postsSlice } from './slices/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    posts: postsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch