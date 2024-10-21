import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const [postData, setPostData] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    async function getPostData() {
      const data = await axios.get(`http://localhost:3000/blogposts/${postId}`);
      setPostData(data.data.post);
    }
    getPostData();
  }, [postId]);

  return (
    <>
      {postData && (
        <div className="post-ctnr">
          <h2>{postData.title}</h2>
          <p>{postData.content}</p>
          <Link to={`/blogposts/${postId}/edit`} state={{ data: postData }}>
            <button>Edit Post</button>
          </Link>
        </div>
      )}
    </>
  );
}
