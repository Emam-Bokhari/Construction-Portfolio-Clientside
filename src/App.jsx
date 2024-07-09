import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import Navbar from "./components/Header/Navbar";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer";
import NotFound from "./components/Page/NotFound/NotFound";
import LoadingAnimation from "./components/LoadingAnimation";
import DashboardHome from "./components/Page/DashboardPage/DashboardHome/DashboardHome";
import AddService from "./components/Page/DashboardPage/DashboardService/AddService/AddService";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
const AboutUs = lazy(() => import("./components/Page/AboutUs/AboutUs"));
const Service = lazy(() => import("./components/Page/Service/Service"));
const Blog = lazy(() => import("./components/Page/Blog/Blog"));
const ContactUs = lazy(() => import("./components/Page/ContactUs/ContactUs"));
const BlogDetails = lazy(() => import("./components/Page/Blog/BlogDetails"));
const ServiceDetails = lazy(() =>
  import("./components/Page/Service/ServiceDetails")
);

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

const DashboardDefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <DashboardHeader />
      {children}
    </Fragment>
  );
};

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
          path="/"
          exact
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AboutUs />
              </Suspense>
            </DefaultLayout>
          }
          path="/aboutUs"
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <Service />
              </Suspense>
            </DefaultLayout>
          }
          path="/service"
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ServiceDetails />
              </Suspense>
            </DefaultLayout>
          }
          path="/serviceDetails/:serviceId"
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <Blog />
              </Suspense>
            </DefaultLayout>
          }
          path="/blog"
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <BlogDetails />
              </Suspense>
            </DefaultLayout>
          }
          path="/blogDetails/:blogId"
        />
        <Route
          element={
            <DefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ContactUs />
              </Suspense>
            </DefaultLayout>
          }
          path="/contactUs"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <DashboardHome />
            </DashboardDefaultLayout>
          }
          path="/dashboard"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <AddService />
            </DashboardDefaultLayout>
          }
          path="/dashboard/addService"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Fragment>
  );
}
