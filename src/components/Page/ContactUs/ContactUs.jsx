import { Fragment } from "react";
import CommonPageBanner from "../../CommonPageBanner";
import ContactUsSection from "../../ContactUsSection";

export default function ContactUs() {
  return (
    <Fragment>
      <CommonPageBanner heading="Contact Us" title="Home | Contact Us" />
      <ContactUsSection />
      {/* Start google map  */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 my-20 ">
        <iframe className="w-full h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0898559441666!2d90.41136513576954!3d23.779814382613097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c1bdb3b45%3A0xefe06000da486121!2sGulshan%20Shopping%20Center%2C%20Bir%20Uttam%20AK%20Khandakar%20Road%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1720766685362!5m2!1sen!2sbd"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* Ends google map  */}
    </Fragment>
  );
}
