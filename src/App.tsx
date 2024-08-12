import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { root } from "routes";

export default function App() {


  return <RouterProvider router={createBrowserRouter(root)} />

}
