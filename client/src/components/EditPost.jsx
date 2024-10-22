import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

export default function EditPost({ data, postId, setIsEditing, getPostData }) {
  const [titleValue, setTitleValue] = useState(data.title);
  const [contentValue, setContentValue] = useState(data.content);

  function handleUsernameChange(e) {
    setTitleValue(e.target.value);
  }
  function handleContentChange(e) {
    setContentValue(e.target.value);
  }

  async function updatePost(e) {
    e.preventDefault();
    const formData = {
      title: e.target.form.title.value,
      text: e.target.form.text.value,
    };
    await axios.post(`http://localhost:3000/blogposts/${postId}/edit`, {
      formData,
    });
    setIsEditing(false);
    getPostData();
  }

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleUsernameChange}
        value={titleValue}
      />
      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        id="text"
        placeholder="Create your blogpost..."
        rows="10"
        onChange={handleContentChange}
        value={contentValue}
      ></textarea>
      <button onClick={updatePost}>Update</button>
    </form>
  );
}

EditPost.propTypes = {
  data: PropTypes.object,
  postId: PropTypes.string,
  setIsEditing: PropTypes.func,
  getPostData: PropTypes.func,
};
