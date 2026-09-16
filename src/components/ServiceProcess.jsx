import { processSteps } from "@/util/assets";
import SectionHeader from "./SectionHeader";

const ServiceProcess = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge={"Our Process"}
          description={
            "A systematic approach to delivering exceptional design solutions."
          }
          highlight={"Work"}
          title={"How We"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((process, idx) => (
            <div key={idx} className="fade-in text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="size-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">{process.step}</span>
                </div>
                <h4 className="text-gray-800 font-bold font-heading mb-4 text-2xl">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
