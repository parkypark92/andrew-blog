import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import EditPost from "../components/EditPost";
import axios from "axios";

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { postId } = useParams();

  const getPostData = useCallback(async () => {
    const data = await axios.get(`http://localhost:3000/blogposts/${postId}`);
    setPostData(data.data.post);
  }, [postId]);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  return (
    <>
      {isEditing === true ? (
        <EditPost
          data={postData}
          postId={postId}
          setIsEditing={setIsEditing}
          getPostData={getPostData}
        />
      ) : (
        postData && (
          <div className="post-ctnr">
            <h2>{postData.title}</h2>
            <p>{postData.content}</p>
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit Post
            </button>

            <Link to={`/blogposts/${postId}/delete`} state={{ data: postData }}>
              <button>Delete Post</button>
            </Link>
          </div>
        )
      )}
    </>
  );
}
