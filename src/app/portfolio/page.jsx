"use client";
import { useState } from "react";

import PageHero from "@/components/PageHero";
import PortfolioFilter from "@/components/PortfolioFilter";
import React from "react";
import { projects } from "@/util/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProject =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Portfolios"}
        description={
          "Explore our award-winning home modeling projects that showcase our design excellence."
        }
      />
      <PortfolioFilter active={activeFilter} setActive={setActiveFilter} />

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProject.map((project, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden">
                <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform ease-in-out duration-300 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    loading="eager"
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl text-gray-800 font-heading mb-2 font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-medium">
                    {project.location}
                  </span>
                  <FaArrowRight className="cursor-pointer text-xl hover:text-accent" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <button className="flex items-center justify-center gap-2 bg-accent px-6 py-2 rounded-full text-white">
              View All Project <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
