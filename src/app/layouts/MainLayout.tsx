import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;
