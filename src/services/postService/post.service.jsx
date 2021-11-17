class PostService {
  getPosts = () => {
    const posts = localStorage.getItem("posts");

    return JSON.parse(posts);
  };

  createPost = (data) => {
    const posts = localStorage.getItem("posts") || "[]";

    localStorage.setItem("posts", JSON.stringify([data, ...JSON.parse(posts)]));

    return JSON.parse(localStorage.getItem("posts"));
  };
}

export const PostApi = new PostService();
