import { timeline } from "@/util/assets";
import SectionHeader from "./SectionHeader";

const TimeLine = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge={"Our Journey"}
          title={"Milestones "}
          highlight={"Timeline"}
          description={"Key moments in our journey of design excellence."}
        />
        <div className="max-w-4xl mx-auto fade-in">
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:items-center"
              >
                <div className="max-w-16 max-h-16 min-w-16 min-h-16 rounded-full bg-accent text-white flex items-center justify-center max-md:mx-auto">
                  {item.year}
                </div>
                <div className="bg-secondary p-6 rounded-2xl grow">
                  <h3 className="font-heading text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
