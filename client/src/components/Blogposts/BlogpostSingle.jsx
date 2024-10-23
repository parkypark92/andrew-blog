import { Link } from "react-router-dom";
import styles from "./Blogpost.module.css";
import PropTypes from "prop-types";

export default function BlogpostSingle({
  postData,
  setIsEditing,
  setIsDeleting,
}) {
  return (
    <div className={styles.container}>
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
  );
}

BlogpostSingle.propTypes = {
  postData: PropTypes.object,
  setIsDeleting: PropTypes.func,
  setIsEditing: PropTypes.func,
};
