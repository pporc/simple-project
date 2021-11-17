import { PostApi } from "../../../services/postService/post.service";
import { setPostsAction } from "../action";

export const getPostsThunk = () => async (dispatch) => {
  try {
    const posts = await PostApi.getPosts();
    await dispatch(setPostsAction(posts));
  } catch (error) {
    console.log(error);
  }
};
