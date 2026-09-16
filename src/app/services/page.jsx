import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import ServiceProcess from "@/components/ServiceProcess";
import React from "react";

const Services = () => {
  return (
    <div>
      <PageHero
        description={
          "Comprehensive home modeling and design solutions tailored to your unique needs and vision."
        }
        highlight={"Services"}
        title={"Our"}
      />
      <ServiceCard />
      <ServiceProcess />
    </div>
  );
};

export default Services;
