import { Fragment } from "react";
import AboutUsSection from "./components/AboutUsSection";
import TopNavbar from "./components/Header/TopNavbar";
import Navbar from "./components/Header/Navbar";
import Banner from "./components/Header/Banner";
import ServiceSection from "./components/ServiceSection";
import WorkProcessSection from "./components/WorkProcessSection";
import GetFreeConsultation from "./components/GetFreeConsultation";
import ProjectCompletationCount from "./components/ProjectCompletationCounte";
import ProjectSection from "./components/ProjectSection";
import TeamMemberSection from "./components/TeamMemberSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FaqSection from "./components/FaqSection";

export default function App() {
  return (
    <Fragment>
      <header>
        <TopNavbar />
        <Navbar />
        <Banner />
      </header>
      <main>
        <AboutUsSection />
        <ServiceSection />
        <WorkProcessSection />
        <div className="relative">
          <GetFreeConsultation />
          <ProjectCompletationCount />
        </div>
        <ProjectSection />
        <TeamMemberSection />
        <WhyChooseUsSection />
        <FaqSection />
      </main>
    </Fragment>
  );
}
