import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import Partner from "../partner/Partner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
      <Partner/>
      <Section/>
      <Footer />
    </>
  );
};

export default Layout;
