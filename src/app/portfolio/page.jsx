import PageHero from "@/components/PageHero";
import React from "react";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Portfolios"}
        description={
          "Explore our award-winning home modeling projects that showcase our design excellence."
        }
      />
      <PortfolioClient />
    </div>
  );
};

export default Portfolio;
