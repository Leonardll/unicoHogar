import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import MastHead from "./MastHead";

import Navbar from "./navbar";
import ScrollToTop from "./ScrollTotop";

const Layout = ({ children }) => (
  <React.StrictMode>
    <Head>
      <title>Unico Hogar</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container-fluid px-0 mw-3 m-auto scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#mainNav"
    data-bs-offset="-130"
    tabIndex="0"
    >
      <header>
        <Navbar /> 
        <MastHead />
      </header>
      <main>{children}</main>
      <ScrollToTop />
    </div>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

export default Layout;
