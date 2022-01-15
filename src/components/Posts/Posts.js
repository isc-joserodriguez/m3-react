import React from "react";
import axios from "axios";

const URL_ROOT = `${process.env.REACT_APP_API}/post/my-posts`;

async function getPosts() {
  const resp = await axios.get(`${URL_ROOT}/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  try {
    return resp.data.detail;
  } catch (error) {
    throw new Error("No hay datos");
  }
}

const Posts = ({ postList }) => {
  const [posts, setPost] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((response) => setPost(response));
  }, []);

  if (posts.length == 0) return <div>No hay datos</div>;

  return (
    <div>
      POSTS
      {posts.map((post) => (
        <p key={post._id}>
          {post.title} - {post.body}
        </p>
      ))}
    </div>
  );
};

export default Posts;
