const Newsletter = () => {
  return (
    <div className="py-20 bg-accent-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get design tips, project inspiration, and exclusive offers directly
            to your inbox.
          </p>
          <form
            action=""
            className="max-w-xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              className="grow px-6 py-4 rounded-full text-white bg-gray-900 border-gray-600 outline-none placeholder:text-sm placeholder:text-white"
              placeholder="Your Email Address"
            />
            <button className="px-6 py-4 bg-accent rounded-full text-white font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
