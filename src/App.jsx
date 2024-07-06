import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import AboutUs from "./components/Page/AboutUs/AboutUs";
import Service from "./components/Page/Service/Service";
import Blog from "./components/Page/Blog/Blog";
import ContactUs from "./components/Page/ContactUs/ContactUs";
import NotFound from "./components/Page/NotFount/NotFound";
import Navbar from "./components/Header/Navbar";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer";
import BLogDetails from "./components/Page/Blog/BlogDetails";
import ServiceDetails from "./components/Page/Service/ServiceDetails";

export default function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<AboutUs />} path="/aboutUs" />
        <Route element={<Service />} path="/service" />
        <Route element={<ServiceDetails />} path="/serviceDetails/:serviceId" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<BLogDetails />} path="/blogDetails/:blogId" />
        <Route element={<ContactUs />} path="/contactUs" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </Fragment>
  );
}
