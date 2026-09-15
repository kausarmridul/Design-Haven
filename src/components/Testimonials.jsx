import { homePageData } from "@/util/assets";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const { testimonials } = homePageData;
  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge={"Client Story"}
          description={
            "Hear from homeowners who transformed their living spaces with our designs."
          }
          highlight={"Client Say"}
          title={"What Our "}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="fade-in bg-white p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ease-in-out"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  loading="eager"
                  height={200}
                  className="min-w-16 min-h-16 max-h-16 max-w-16 rounded-full object-cover object-center"
                />
                <div>
                  <h4 className="font-heading text-gray-800 font-bold">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{item.quote}</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
