import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorePage from "./components/ErrorePage/ErrorePage.jsx";
import JobDetailsData from "./components/JobDetailsData/JobDetailsData.jsx";
import AppliedJob from "./components/AppliedJob/AppliedJob.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/job/:jobId",
        element: <JobDetailsData></JobDetailsData>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
