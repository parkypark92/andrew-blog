import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function EditPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState(data.title);
  function handleUsernameChange(e) {
    setTitleValue(e.target.value);
  }
  const [contentValue, setContentValue] = useState(data.content);
  function handleContentChange(e) {
    setContentValue(e.target.value);
  }
  async function submitAndRedirect(e) {
    e.preventDefault();
    const formData = {
      title: e.target.form.title.value,
      text: e.target.form.text.value,
    };
    await axios.post(`http://localhost:3000/blogposts/${postId}/edit`, {
      formData,
    });
    navigate(`/blogposts/${postId}`);
  }

  return (
    <>
      {postId && data && (
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
          <button onClick={submitAndRedirect}>Update</button>
        </form>
      )}
    </>
  );
}
