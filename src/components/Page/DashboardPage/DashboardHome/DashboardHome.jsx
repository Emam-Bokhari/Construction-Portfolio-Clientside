import { Fragment } from "react";
import ServicesTable from "./ServicesTable";
import TotalCards from "./TotalCards";
import TeamMembersTable from "./TeamMembersTable";
import ProjectsTable from "./ProjectsTable";
import BlogsTable from "./BlogsTable";
import TestimonialsTable from "./TestimonialsTable";
import useBlog from "../../../../hooks/useBlog";
import useProject from "../../../../hooks/useProject";
import useService from "../../../../hooks/useService";
import useTeamMember from "../../../../hooks/useTeamMember";
import useTestimonial from "../../../../hooks/useTestimonial";
import WrapStyle from "../../../Dashboard/WrapStyle";

export default function DashboardHome() {
  const { blogs, blogLoading } = useBlog();
  const { projects, projectLoading } = useProject();
  const { services, serviceLoading } = useService();
  const { teamMembers, teamMemberLoading } = useTeamMember();
  const { testimonials, testimonialLoading } = useTestimonial();
  return (
    <Fragment>
      <WrapStyle>
        <TotalCards
          totalBlogs={blogs}
          totalServices={services}
          totalProjects={projects}
          totalTeamMembers={teamMembers}
        />
        {/* start service,team members,projects gallery  */}
        <div className="my-5 flex flex-col 2xl:flex-row  gap-5">
          <ServicesTable
            servicesData={services}
            serviceLoading={serviceLoading}
          />
          <TeamMembersTable
            teamMembersData={teamMembers}
            teamMemberLoading={teamMemberLoading}
          />
          <ProjectsTable
            projectsData={projects}
            projectLoading={projectLoading}
          />
        </div>
        {/* end service,team members,projects gallery  */}
        {/* start blogs and testimonials  */}
        <div className=" flex flex-col 2xl:flex-row gap-5">
          <BlogsTable blogsData={blogs} blogLoading={blogLoading} />
          <TestimonialsTable
            testimonialsData={testimonials}
            testimonialLoading={testimonialLoading}
          />
        </div>
      </WrapStyle>
    </Fragment>
  );
}
