import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from "./elements/back-top";
import PageScrollTop from "./elements/page-scroll-top";

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from "./pages/index";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import ServiceDetail from "./pages/service-detail";
import ContactUs from "./pages/contact-us";
import Error from "./pages/error-404";
import ServiceAutism from "./pages/service-autism";
import ServiceTdah from "./pages/service-tdah";
import ServiceLuto from "./pages/service-luto";
import ServiceAnsiedade from "./pages/service-ansiedade";
import ServiceDepressao from "./pages/service-depressao.jsx";

class Markup extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<ThemeLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-detail" element={<ServiceDetail />} />
              <Route path="/service-autism" element={<ServiceAutism />} />
              <Route path="/service-tdah" element={<ServiceTdah />} />
              <Route path="/service-luto" element={<ServiceLuto />} />
              <Route path="/service-depressao" element={<ServiceDepressao />} />
              <Route path="/service-ansiedade" element={<ServiceAnsiedade />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
          <PageScrollTop />
        </BrowserRouter>
        <BackToTop />
      </>
    );
  }
}

function ThemeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Markup;
