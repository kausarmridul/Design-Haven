import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PageHero from "@/components/PageHero";
import React from "react";

const Contact = () => {
  return (
    <div>
      <PageHero
        title={"Get In"}
        highlight={"Touch"}
        description={
          "Ready to start your home modeling project? Contact us today."
        }
      />

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
