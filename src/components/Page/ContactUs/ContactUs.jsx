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
        <iframe
          className="w-full h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29209.88839006834!2d90.41164562142691!3d23.77460729227794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7547c7bd831%3A0xd11e98716bda828!2sQueens%20Construction%20Ltd%20Head%20Office!5e0!3m2!1sen!2sbd!4v1716649213986!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Ends google map  */}
    </Fragment>
  );
}
