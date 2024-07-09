import { Fragment } from "react";
import ServicesTable from "./ServicesTable";
import TotalCards from "./TotalCards";
import TeamMembersTable from "./TeamMembersTable";
import ProjectsTable from "./ProjectsTable";
import BlogsTable from "./BlogsTable";
import TestimonialsTable from "./TestimonialsTable";
import WrapStyle from "../../../Dashboard/WrapStyle";

export default function DashboardHome({
  blogsData,
  blogLoading,
  projectsData,
  projectLoading,
  servicesData,
  serviceLoading,
  testimonialsData,
  testimonialLoading,
  teamMembersData,
  teamMemberLoading,
}) {
  return (
    <Fragment>
      <WrapStyle>
        <TotalCards
          totalBlogs={blogsData}
          totalServices={servicesData}
          totalProjects={projectsData}
          totalTeamMembers={teamMembersData}
        />
        {/* start service,team members,projects gallery  */}
        <div className="my-5 flex flex-col 2xl:flex-row  gap-5">
          <ServicesTable
            servicesData={servicesData}
            serviceLoading={serviceLoading}
          />
          <TeamMembersTable
            teamMembersData={teamMembersData}
            teamMemberLoading={teamMemberLoading}
          />
          <ProjectsTable
            projectsData={projectsData}
            projectLoading={projectLoading}
          />
        </div>
        {/* end service,team members,projects gallery  */}
        {/* start blogs and testimonials  */}
        <div className=" flex flex-col 2xl:flex-row gap-5">
          <BlogsTable blogsData={blogsData} blogLoading={blogLoading} />
          <TestimonialsTable
            testimonialsData={testimonialsData}
            testimonialLoading={testimonialLoading}
          />
        </div>
      </WrapStyle>
    </Fragment>
  );
}
