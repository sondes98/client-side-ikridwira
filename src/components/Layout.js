import React from "react";
import { Header } from "./header/Header";
import FooterSection from "../containers/FooterSection";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <FooterSection />
    </div>
  );
};

export default Layout;
