import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import CreateUser from "./pages/CreateUser";
import EditPost from "./pages/EditPost";

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
      path: "blogposts/:postId/edit",
      element: <EditPost />,
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
