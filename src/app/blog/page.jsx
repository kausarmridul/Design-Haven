import BlogCard from "@/components/BlogCard";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/util/assets";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <PageHero
        title={"Design"}
        highlight={"Insight"}
        description={
          "Explore design trends, tips, and insights from our team of experts."
        }
      />

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, idx) => (
              <BlogCard blog={blog} key={idx} />
            ))}
          </div>

          <div className="flex justify-center items-center mt-8">
            <button className="px-6 py-3 bg-accent text-white rounded-full text-center flex items-center gap-2">
              View All Article <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
