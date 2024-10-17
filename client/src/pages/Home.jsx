import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    async function getPostData() {
      const data = await axios.get("http://localhost:3000/blogposts");
      setPostsData(data.data.posts);
    }
    getPostData();
  }, []);

  return (
    <div>
      <div className="posts-cntr">
        {postsData &&
          postsData.map((post) => {
            return (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link to={`/blogposts/${post.id}`}>View Post</Link>
              </div>
            );
          })}
      </div>
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
      <Link to="/create-user">
        <button>Create User</button>
      </Link>
    </div>
  );
}
