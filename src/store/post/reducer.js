import { initialState } from "./store";
import { SET_POSTS } from "./types";

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};
