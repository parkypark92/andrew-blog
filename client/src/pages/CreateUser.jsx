export default function CreateUser() {
  return (
    <form action="http://localhost:3000/users/signup" method="POST">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="isAuthor">isAuthor</label>
      <input type="text" name="isAuthor" id="isAuthor" />
      <button>Submit</button>
    </form>
  );
}
