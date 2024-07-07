import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import Navbar from "./components/Header/Navbar";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
const AboutUs = lazy(() => import("./components/Page/AboutUs/AboutUs"));
const Service = lazy(() => import("./components/Page/Service/Service"));
const Blog = lazy(() => import("./components/Page/Blog/Blog"));
const ContactUs = lazy(() => import("./components/Page/ContactUs/ContactUs"));
const BlogDetails = lazy(() => import("./components/Page/Blog/BlogDetails"));
const ServiceDetails = lazy(() =>
  import("./components/Page/Service/ServiceDetails")
);
const NotFound = lazy(() => "./components/Page/NotFount/NotFound");

export default function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <AboutUs />
            </Suspense>
          }
          path="/aboutUs"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <Service />
            </Suspense>
          }
          path="/service"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <ServiceDetails />
            </Suspense>
          }
          path="/serviceDetails/:serviceId"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <Blog />
            </Suspense>
          }
          path="/blog"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <BlogDetails />
            </Suspense>
          }
          path="/blogDetails/:blogId"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <ContactUs />
            </Suspense>
          }
          path="/contactUs"
        />
        <Route
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <NotFound />
            </Suspense>
          }
          path="*"
        />
      </Routes>
      <Footer />
    </Fragment>
  );
}
