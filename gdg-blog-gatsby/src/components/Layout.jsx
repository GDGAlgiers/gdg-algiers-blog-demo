import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title} - GDG Blog</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
