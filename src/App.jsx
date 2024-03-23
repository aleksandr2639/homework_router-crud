import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import CreatePost from "./pages/Createpost";
import ViewPost from "./pages/Viewpost";
import EditPost from "./pages/Editpost";
import Notfoundpage from "./pages/NotfoundPage";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/new" element={<CreatePost />} />
        <Route path="posts/:id" element={<ViewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
