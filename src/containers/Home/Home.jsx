import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/post";
import { getPostsThunk } from "../../store/post/thunk/getPostsThunk";
import { PostCard } from "../../components/PostCard";

export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  React.useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return (
    <div className="home-container">
      {posts ? (
        <ul>
          {posts.map((value, i) => (
            <li key={i}>
              <PostCard
                title={value.title}
                text={value.text}
                date={value.date}
                author={value.author}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No posts</h3>
      )}
    </div>
  );
};

export default Home;
