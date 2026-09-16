import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import TimeLine from "@/components/TimeLine";
import Values from "@/components/Values";
import React from "react";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div>
      <PageHero
        title={"About"}
        highlight={"Design Haven"}
        description={
          "For nearly two decades, we've been transforming visions into breathtaking realities, creating homes that tell stories and reflect personalities."
        }
      />
      <Story />
      <Values />
      <TimeLine />
    </div>
  );
};

export default About;
