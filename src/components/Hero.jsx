import { homePageData } from "@/util/assets";
import Image from "next/image";
import { FaAward, FaCalendarAlt, FaPlayCircle, FaTrophy } from "react-icons/fa";

const Hero = () => {
  const { hero } = homePageData;

  return (
    <div className="py-20 min-h-screen flex items-center justify-center bg-linear-to-b from-primary to-secondary">
      <div className="grid max-w-6xl mx-auto px-6 grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="inline-block items-center px-4 py-2 bg-accent-light rounded-full text-accent mb-6">
            <div className="flex items-center gap-2 text-sm">
              <FaAward />
              {hero.badge}
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading text-gray-800">
            {hero.title.normal}
            <span className="text-accent"> {hero.title.highlight} </span>
            {hero.title.end}
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mb-10">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center px-8 py-3 bg-accent text-white rounded-full gap-2 transition-all duration-300 ease-in-out hover:bg-accent-hover hover:-translate-y-0.5">
              <FaCalendarAlt />
              Book Consultation
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-accent hover:bg-accent-light text-accent flex items-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 bg-transparent">
              <FaPlayCircle />
              View Projects
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8">
            {hero.stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-gray-800 font-bold font-heading text-3xl">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-20">
          <div className="relative">
            <div className="bg-accent-light rounded-3xl p-2 shadow-2xl overflow-hidden">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1000}
                loading="eager"
                height={1000}
                className="rounded-3xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl w-64">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-10 flex items-center justify-center bg-accent rounded-full">
                  <FaTrophy className="text-xl text-white" />
                </div>
                <h4 className="font-heading font-bold text-gray-800">
                  Design Excellence
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                2026 International Design Award Winner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
