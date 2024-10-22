import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import EditPost from "../components/EditPost";
import DeletePost from "../components/DeletePost";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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
      {isEditing ? (
        <EditPost
          data={postData}
          postId={postId}
          setIsEditing={setIsEditing}
          getPostData={getPostData}
        />
      ) : isDeleting ? (
        <DeletePost
          data={postData}
          postId={postId}
          setIsDeleting={setIsDeleting}
        />
      ) : (
        postData && (
          <div className="post-ctnr">
            <h2>{postData.title}</h2>
            <p>{postData.content}</p>
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit Post
            </button>
            <button type="button" onClick={() => setIsDeleting(true)}>
              Delete Post
            </button>
            <Link to={"/"}>
              <button>Home</button>
            </Link>
          </div>
        )
      )}
    </>
  );
}
