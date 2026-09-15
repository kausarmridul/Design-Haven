import { homePageData } from "@/util/assets";
import SectionHeader from "./SectionHeader";

const Feature = () => {
  const { features } = homePageData;
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge={"Why Choose Us"}
          title={"Premium"}
          highlight={"Design Solution"}
          description={
            "We combine creativity with functionality to deliver exceptional home modeling experiences."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ease-in-out"
            >
              <div className="size-16 rounded-full bg-accent text-white flex items-center justify-center mb-6">
                <item.icon className="text-2xl" />
              </div>
              <h3 className="text-gray-800 font-heading font-bold mb-4 text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
