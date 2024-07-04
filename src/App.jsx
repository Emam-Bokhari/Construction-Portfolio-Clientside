import { Fragment } from "react";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function App() {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar />
      <Banner />
    </Fragment>
  );
}
