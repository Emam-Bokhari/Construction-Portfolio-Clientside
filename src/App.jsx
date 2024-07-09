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
import ManageService from "./components/Page/DashboardPage/DashboardService/ManageService/ManageService";
import DashboardFooter from "./components/Dashboard/DashboardFooter";
import AddTeamMember from "./components/Page/DashboardPage/TeamMember/AddTeamMember/AddTeamMember";
import ManageTeamMember from "./components/Page/DashboardPage/TeamMember/ManageTeamMember/ManageTeamMember";
import AddProject from "./components/Page/DashboardPage/DashboardProject/AddProject/AddProject";
import ManageProject from "./components/Page/DashboardPage/DashboardProject/ManageProject/ManageProject";
import AddTestimonial from "./components/Page/DashboardPage/DashboardTestimonial/AddTestimonial/AddTestimonial";
import ManageTestimonial from "./components/Page/DashboardPage/DashboardTestimonial/ManageTestimonial/ManageTestimonial";
import AddBlog from "./components/Page/DashboardPage/DashboardBlog/AddBlog/AddBlog";
import ManageBlog from "./components/Page/DashboardPage/DashboardBlog/ManageBlog/ManageBlog";
import useBlog from "./hooks/useBlog";
import useProject from "./hooks/useProject";
import useService from "./hooks/useService";
import useTeamMember from "./hooks/useTeamMember";
import useTestimonial from "./hooks/useTestimonial";
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
      <DashboardFooter />
    </Fragment>
  );
};

export default function App() {
  // fetch data
  const { blogs, blogLoading } = useBlog();
  const { projects, projectLoading } = useProject();
  const { services, serviceLoading } = useService();
  const { teamMembers, teamMemberLoading } = useTeamMember();
  const { testimonials, testimonialLoading } = useTestimonial();
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
              <DashboardHome 
              servicesData={services}
              serviceLoading={serviceLoading}
              projectsData={projects}
              projectLoading={projectLoading} 
              blogsData={blogs} 
              blogLoading={blogLoading} 
              teamMembersData={teamMembers}
              teamMemberLoading={teamMemberLoading}
              testimonialsData={testimonials}
              testimonialLoading={testimonialLoading}
              />
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
        <Route
          element={
            <DashboardDefaultLayout>
              <ManageService servicesData={services} serviceLoading={serviceLoading} />
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageService"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <AddTeamMember />
            </DashboardDefaultLayout>
          }
          path="/dashboard/addTeamMember"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <ManageTeamMember />
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageTeamMember"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <AddProject />
            </DashboardDefaultLayout>
          }
          path="/dashboard/addProject"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <ManageProject />
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageProject"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <AddTestimonial />
            </DashboardDefaultLayout>
          }
          path="/dashboard/addTestimonial"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <ManageTestimonial />
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageTestimonial"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <AddBlog />
            </DashboardDefaultLayout>
          }
          path="/dashboard/addBlog"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <ManageBlog />
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageBlog"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Fragment>
  );
}
