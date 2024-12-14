import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";
import Library from "../components/Library/Library";
import BookList from "../components/BookList/BookList";
import Quotes from "../components/Quotes/Quotes";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Alert from "bootstrap/js/dist/alert";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


import {
  createBrowserRouter,
  BrowserRouter,  
  Outlet,
  RouterProvider,
} from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/library",
          element: <Library/>,
        },
        {
          path: "/booklist",
          element: <BookList/>,
        },
        {
          path: "/quotes",
          element: <Quotes/>,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ] // array of routes
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
