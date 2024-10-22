import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  const sendBlogpostData = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.form.title.value,
      text: e.target.form.text.value,
      userId: e.target.form.userId.value,
    };
    await axios.post("http://localhost:3000/blogposts", {
      formData,
    });
    navigate("/");
  };
  return (
    <form action="http://localhost:3000/blogposts" method="POST">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        id="text"
        placeholder="Create your blogpost..."
        rows="10"
      ></textarea>
      <label htmlFor="userId">userId</label>
      <input type="text" name="userId" id="userId" />
      <button onClick={sendBlogpostData}>Submit</button>
    </form>
  );
}
