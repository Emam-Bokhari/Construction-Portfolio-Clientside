import { Fragment } from "react";
import DashboardHeader from "../../Dashboard/DashboardHeader";
import DashboardFooter from "../../Dashboard/DashboardFooter";
import ServicesTable from "./ServicesTable";
import TotalCards from "./TotalCards";
import TeamMembersTable from "./TeamMembersTable";
import ProjectsTable from "./ProjectsTable";
import BlogsTable from "./BlogsTable";
import TestimonialsTable from "./TestimonialsTable";
import useBlog from "../../../hooks/useBlog";
import useProject from "../../../hooks/useProject";
import useService from "../../../hooks/useService";
import useTeamMember from "../../../hooks/useTeamMember";
import useTestimonial from "../../../hooks/useTestimonial";

export default function DashboardHome() {
  const { blogs, blogLoading } = useBlog();
  const { projects, projectLoading } = useProject();
  const { services, serviceLoading } = useService();
  const { teamMembers, teamMemberLoading } = useTeamMember();
  const { testimonials, testimonialLoading } = useTestimonial();
  return (
    <Fragment>
      <div className="bg-[#EEF3F7]">
        <DashboardHeader />
        <main className="ml-0 lg:ml-[300px] py-4 px-5 mt-11 lg:mt-0 min-h-screen">
          <TotalCards
            totalBlogs={blogs}
            totalServices={services}
            totalProjects={projects}
            totalTeamMembers={teamMembers}
          />
          {/* start service,team members,projects gallery  */}
          <div className="my-5 flex flex-col 2xl:flex-row  gap-5">
            <ServicesTable />
            <TeamMembersTable />
            <ProjectsTable />
          </div>
          {/* end service,team members,projects gallery  */}
          {/* start blogs and testimonials  */}
          <div className=" flex flex-col 2xl:flex-row gap-5">
            <BlogsTable />
            <TestimonialsTable />
          </div>
        </main>
        <DashboardFooter />
      </div>
    </Fragment>
  );
}
