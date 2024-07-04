import { Fragment } from "react";
import AboutUsSection from "./components/AboutUsSection";
import TopNavbar from "./components/Header/TopNavbar";
import Navbar from "./components/Header/Navbar";
import Banner from "./components/Header/Banner";

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
      </main>
    </Fragment>
  );
}
