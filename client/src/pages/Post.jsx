import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import EditPost from "../components/EditPost/EditPost.jsx";
import DeletePost from "../components/DeletePost/DeletePost.jsx";
import BlogpostSingle from "../components/Blogposts/BlogpostSingle";
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
          <BlogpostSingle
            postData={postData}
            setIsDeleting={setIsDeleting}
            setIsEditing={setIsEditing}
          />
        )
      )}
    </>
  );
}
