import { SET_POSTS } from "./types";

export const setPostsAction = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};
