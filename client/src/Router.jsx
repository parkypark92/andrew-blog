import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import CreateUser from "./pages/CreateUser";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "blogposts/:postId",
      element: <Post />,
    },
    {
      path: "create-post",
      element: <CreatePost />,
    },
    {
      path: "create-user",
      element: <CreateUser />,
    },
  ]);

  return <RouterProvider router={router} />;
}
