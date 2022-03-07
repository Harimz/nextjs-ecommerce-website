import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer autoClose={5000} />

      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
