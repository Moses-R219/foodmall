import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>{/* // this will render the components according to path */}
      <Footer />
    </>
  );
};


const Instamart=lazy(()=>import("./components/Instamart"))
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path: "/about",
            element: <About />,
            children:[
              {
                path:"profile",//dont use /profile then it will taken as localhost:1234/profile
                element:<Profile/>
              }
            ]
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
          path:"/restaurant/:restaurantname/:resid",
          element:<RestaurantMenu/>
        },{
          path:"/instamart",
          element:<Suspense><Instamart/></Suspense>
        }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
