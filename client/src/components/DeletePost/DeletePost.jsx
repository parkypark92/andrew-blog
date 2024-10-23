import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DeletePost({ data, postId, setIsDeleting }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const deleteBlogpost = async () => {
    await axios.delete(`http://localhost:3000/blogposts/${postId}`);
    setIsDeleted(true);
  };
  return (
    <>
      {isDeleted ? (
        <div>
          <h1>Post Deleted</h1>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Are you sure you want to delete post?</h2>
          <h3>TITLE: {data.title}</h3>
          <button type="button" onClick={deleteBlogpost}>
            Delete
          </button>
          <button type="button" onClick={() => setIsDeleting(false)}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

DeletePost.propTypes = {
  data: PropTypes.object,
  postId: PropTypes.string,
  setIsDeleting: PropTypes.func,
};
