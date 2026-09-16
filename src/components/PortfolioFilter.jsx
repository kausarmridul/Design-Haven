import { filters } from "@/util/assets";

const PortfolioFilter = ({ active, setActive }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${active === filter ? "bg-accent text-white" : "bg-accent-light text-accent hover:bg-accent hover:text-white"}`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
