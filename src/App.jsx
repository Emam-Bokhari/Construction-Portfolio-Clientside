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
import TestimonialSection from "./components/TestimonialSection";
import ContactUsSection from "./components/ContactUsSection";
import BlogSection from "./components/BlogSection";
import CallForSupportSection from "./components/CallForSupporSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Fragment>
     <body>
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
        <TestimonialSection />
        <ContactUsSection />
        <BlogSection />
        <CallForSupportSection />
      </main>
      <Footer />
     </body>
    </Fragment>
  );
}
