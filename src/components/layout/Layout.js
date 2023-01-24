import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
      <Section/>
      <Footer />
    </>
  );
};

export default Layout;
