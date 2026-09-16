import Image from "next/image";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 fade-in cursor-pointer">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          loading="eager"
          height={500}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 text-xs mb-6">
          <span className="flex items-center gap-2">
            <FaCalendar />
            {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <FaClock />
            {blog.readTime}
          </span>
        </div>
        <h2 className="text-gray-800 font-bold font-heading mb-6">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">{blog.description}</p>
        <button className="text-accent flex items-center gap-2">
          Read Article <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
