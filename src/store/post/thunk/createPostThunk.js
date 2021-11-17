import { PostApi } from "../../../services/postService/post.service";
import { setPostsAction } from "../action";

export const createPostThunk = (data) => async (dispatch) => {
  try {
    const posts = await PostApi.createPost(data);
    await dispatch(setPostsAction(posts));
  } catch (error) {
    console.log(error);
  }
};
