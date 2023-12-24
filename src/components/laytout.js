import React from "react";
import { Header } from "./header/header";
import FooterSection from "../containers/footerSection";

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
