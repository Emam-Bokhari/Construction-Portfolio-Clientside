import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import NotFound from "./components/Page/NotFount/NotFound";
import Navbar from "./components/Header/Navbar";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer";
const AboutUs = lazy(() => import("./components/Page/AboutUs/AboutUs"));
const Service = lazy(() => import("./components/Page/Service/Service"));
const Blog = lazy(() => import("./components/Page/Blog/Blog"));
const ContactUs = lazy(() => import("./components/Page/ContactUs/ContactUs"));
const BlogDetails = lazy(() => import("./components/Page/Blog/BlogDetails"));
const ServiceDetails = lazy(() =>
  import("./components/Page/Service/ServiceDetails")
);

export default function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please Wait...</p>
                </div>
              }
            >
              <AboutUs />
            </Suspense>
          }
          path="/aboutUs"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please Wait...</p>
                </div>
              }
            >
              <Service />
            </Suspense>
          }
          path="/service"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please wait...</p>
                </div>
              }
            >
              <ServiceDetails />
            </Suspense>
          }
          path="/serviceDetails/:serviceId"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please wait...</p>
                </div>
              }
            >
              <Blog />
            </Suspense>
          }
          path="/blog"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please Wait...</p>
                </div>
              }
            >
              <BlogDetails />
            </Suspense>
          }
          path="/blogDetails/:blogId"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <p>Please wait...</p>
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          }
          path="/contactUs"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </Fragment>
  );
}
