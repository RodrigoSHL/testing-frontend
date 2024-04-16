import { Dispatch } from "redux";
import {
  Post,
  addPost,
  setPosts,
  start,
  removePost,
  searchPost,
} from "./postsSlice";
import postsApi from "../../../api/postsApi";

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(start());
    try {
      const { data } = await postsApi.get("/post");
      console.log("data", data);
      dispatch(setPosts(data));
    } catch (error) {
      console.error("Error to get posts:", error);
    }
  };
};

export const createPost = (post: Post) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await postsApi.post("/post", post);
      dispatch(addPost(data));
    } catch (error) {
      console.error("Error to create post:", error);
    }
  };
};

export const deletePost = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await postsApi.delete(`/post/${id}`);
      dispatch(removePost(id));
    } catch (error) {
      console.error("Error to delete post:", error);
    }
  };
};

export const findPost = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(searchPost(name));
  };
};
