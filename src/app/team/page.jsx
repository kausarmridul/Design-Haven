import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import { teamData } from "@/util/assets";
import React from "react";
import { FaUsers } from "react-icons/fa";

export const metadata = {
  title: "Team",
};

const Team = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        description={
          "A talented team of architects, interior designers, and model makers dedicated to creating exceptional spaces."
        }
        highlight={"Teams"}
      />
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
          "
          >
            {teamData.map((team, idx) => (
              <TeamCard key={idx} team={team} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="text-white text-left px-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Join Our Design Team
              </h2>
              <p className="text-base max-w-2xl mx-auto mb-6">
                We&apos;re always looking for talented designers, architects,
                and creative minds to join our studio.
              </p>
              <button className="bg-white rounded-full text-accent px-6 py-3 hover:bg-white/80 transition-all duration-300">
                View Open Position
              </button>
            </div>
            <div className="flex justify-center">
              <div className="size-64 bg-accent-light/40 rounded-full flex items-center justify-center">
                <FaUsers className="text-7xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
