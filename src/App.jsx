import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import Navbar from "./components/Header/Navbar";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer";
import NotFound from "./components/Page/NotFound/NotFound";
import LoadingAnimation from "./components/LoadingAnimation";
import DashboardHome from "./components/Page/DashboardPage/DashboardHome/DashboardHome";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
import DashboardFooter from "./components/Dashboard/DashboardFooter";
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
const UpdateBlog = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardBlog/ManageBlog/Action/UpdateBlog"
  )
);
const UpdateTestimonial = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardTestimonial/ManageTestimonial/Action/UpdateTestimonial"
  )
);
const UpdateProject = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardProject/ManageProject/Action/UpdateProject"
  )
);
const UpdateTeamMember = lazy(() =>
  import(
    "./components/Page/DashboardPage/TeamMember/ManageTeamMember/Action/UpdateTeamMember"
  )
);
const UpdateService = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardService/ManageService/Action/UpdateService"
  )
);
const AddBlog = lazy(() =>
  import("./components/Page/DashboardPage/DashboardBlog/AddBlog/AddBlog")
);
const ManageTestimonial = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardTestimonial/ManageTestimonial/ManageTestimonial"
  )
);
const AddTestimonial = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardTestimonial/AddTestimonial/AddTestimonial"
  )
);
const ManageProject = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardProject/ManageProject/ManageProject"
  )
);
const AddProject = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardProject/AddProject/AddProject"
  )
);
const ManageTeamMember = lazy(() =>
  import(
    "./components/Page/DashboardPage/TeamMember/ManageTeamMember/ManageTeamMember"
  )
);
const AddTeamMember = lazy(() =>
  import(
    "./components/Page/DashboardPage/TeamMember/AddTeamMember/AddTeamMember"
  )
);
const ManageBlog = lazy(() =>
  import("./components/Page/DashboardPage/DashboardBlog/ManageBlog/ManageBlog")
);
const ManageService = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardService/ManageService/ManageService"
  )
);
const AddService = lazy(() =>
  import(
    "./components/Page/DashboardPage/DashboardService/AddService/AddService"
  )
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
        {/* dashboard routes */}
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
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
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AddService />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/addService"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ManageService
                  servicesData={services}
                  serviceLoading={serviceLoading}
                />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageService"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <UpdateService />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/updateService/:serviceId"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AddTeamMember />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/addTeamMember"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ManageTeamMember
                  teamMembersData={teamMembers}
                  teamMemberLoading={teamMemberLoading}
                />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageTeamMember"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <UpdateTeamMember />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/updateTeamMember/:teamMemberId"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AddProject />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/addProject"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ManageProject
                  projectsData={projects}
                  projectLoading={projectLoading}
                />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageProject"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <UpdateProject />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/updateProject/:projectId"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AddTestimonial />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/addTestimonial"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ManageTestimonial
                  testimonialsData={testimonials}
                  testimonialLoading={testimonialLoading}
                />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageTestimonial"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <UpdateTestimonial />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/updateTestimonial/:testimonialId"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <AddBlog />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/addBlog"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <ManageBlog blogsData={blogs} blogLoading={blogLoading} />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/manageBlog"
        />
        <Route
          element={
            <DashboardDefaultLayout>
              <Suspense fallback={<LoadingAnimation />}>
                <UpdateBlog />
              </Suspense>
            </DashboardDefaultLayout>
          }
          path="/dashboard/updateBlog/:blogId"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Fragment>
  );
}
