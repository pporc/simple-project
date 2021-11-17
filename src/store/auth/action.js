import { SET_ACCOUNT } from "./types";

export const setAccountAction = (payload) => {
  return {
    type: SET_ACCOUNT,
    payload,
  };
};
