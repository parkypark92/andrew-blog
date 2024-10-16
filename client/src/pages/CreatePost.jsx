export default function CreatePost() {
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
      <button>Submit</button>
    </form>
  );
}
