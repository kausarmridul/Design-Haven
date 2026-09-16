import { allServices } from "@/util/assets";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in"
            >
              <div className="size-16 bg-accent rounded-full mb-6 flex items-center justify-center text-white">
                <service.icon className="text-2xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-4 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 gap-4"
                  >
                    <FaCheck className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 rounded-full gap-2 flex items-center bg-accent text-white">
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
