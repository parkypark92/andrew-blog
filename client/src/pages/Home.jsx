import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Blogpost from "../components/Blogpost";
import axios from "axios";

export default function Home() {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    async function getPostData() {
      const response = await axios.get("http://localhost:3000/blogposts");
      setPostsData(response.data.posts);
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
                <Blogpost data={post}></Blogpost>
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
