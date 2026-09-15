import { story } from "@/util/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Story = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="fade-in">
          <span className="px-4 py-2 bg-accent-light rounded-full text-accent">
            {story.badge}
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-heading my-6">
            Our <span className="text-accent">{story.title}</span>
          </h2>
          <div className="space-y-6">
            {story.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-600">
                {para}
              </p>
            ))}
          </div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-accent text-white hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-accent-hover hover:shadow-lg mt-6">
            Meet Our Team
            <FaArrowRight />
          </button>
        </div>
        <div className="fade-in">
          <div
            className="bg-accent-light rounded-3xl p-2
           outline-hidden shadow-2xl"
          >
            <Image
              src={story.image}
              alt={"About Design Haven"}
              width={800}
              loading="eager"
              height={800}
              className="w-full rounded-3xl hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
