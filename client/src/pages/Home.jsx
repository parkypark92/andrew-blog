import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
      <Link to="/create-user">
        <button>Create User</button>
      </Link>
    </div>
  );
}
