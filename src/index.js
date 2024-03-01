import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="About" element={<About />} />
      <Route path="Blogs" element={<Blogs />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
