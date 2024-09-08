import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Body from "./component/Body/Body.jsx";
import "./style.css";
import Effect from "./component/Effect/Effect.jsx";
import MainPage from "./component/MainPage/MainPage.jsx";


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Effect />,
      },
      {
        path: "/body",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
