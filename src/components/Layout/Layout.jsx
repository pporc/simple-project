import React from "react";
import { AppRoutes } from "../../routes/AppRoutes";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => (
  <div className="layout-container">
    <Header />
    <div className="main-container">{AppRoutes}</div>
    <Footer />
  </div>
);
